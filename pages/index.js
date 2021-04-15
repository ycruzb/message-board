import React from "react";
import Head from "next/head";
import useSWR from "swr";
import ChannelsPanel from "../components/channelsPanel";
import MessagesPanel from "../components/messagesPanel";
import FormPanel from "../components/formPanel";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home() {
  // using SWR here for a better performance, caching, etc
  const { data, error } = useSWR(`/api/channels`, fetcher);

  const [messages, setMessages] = React.useState(false);

  const [selectedChannel, setSelectedChannel] = React.useState(false);
  return (
    <>
      <Head>
        <title>Message Board Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/5">
          <ChannelsPanel
            data={data}
            error={error}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            setMessages={setMessages}
          />
        </div>
        <div className="w-full lg:w-2/5">
          <MessagesPanel
            selectedChannel={selectedChannel}
            messages={messages}
          />
        </div>
        <div className="w-full lg:w-2/5">
          <FormPanel
            selectedChannel={selectedChannel}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      </div>
    </>
  );
}
