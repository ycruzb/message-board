const ChannelsPanel = ({
  data,
  error,
  selectedChannel,
  setSelectedChannel,
  setMessages,
}) => {
  const selectChannelHandle = async (channelId) => {
    setSelectedChannel(channelId);
    setMessages(false);
    const response = await fetch(`/api/messages/${channelId}`);
    const dataResponse = await response.json();
    //console.log(dataResponse.data.getchannel.messages);
    setMessages(dataResponse.data.getchannel.messages);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-3">Channels</h1>
      {error && (
        <div className="bg-white p-4 rounded-lg shadow-lg text-red-600">
          Error loading channels
        </div>
      )}
      {!data && !error ? (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <ul className=" animate-pulse">
            <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
            <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
            <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
            <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
            <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
          </ul>
        </div>
      ) : (
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg">
          <ul>
            {data.data.querychannel.map((item) => (
              <li
                key={item.id}
                className={
                  selectedChannel === item.id
                    ? "my-1 px-2 cursor-pointer bg-blue-600 text-white"
                    : "my-1 px-2 cursor-pointer"
                }
                onClick={() => selectChannelHandle(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ChannelsPanel;
