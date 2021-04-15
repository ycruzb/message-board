import React from "react";

const FormPanel = ({ selectedChannel, messages, setMessages }) => {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = fetch("/api/channel", {
      method: "POST",
      body: JSON.stringify({ channelId: selectedChannel, text: text }),
      headers: { "Content-Type": "application/json" },
    });
    const newMessages = [...messages, { text: text }];
    //console.log(newMessages);
    setMessages(newMessages);
    setText("");
  };

  return (
    <>
      {selectedChannel && (
        <>
          <h1 className="text-2xl font-semibold mb-3">Add Message</h1>
          <div className="">
            <form onSubmit={handleSubmit}>
              <label htmlFor="message"></label>
              <textarea
                className="w-full bg-white p-4 rounded-lg mb-2 outline-none shadow-lg"
                name="message"
                id="message"
                rows="3"
                value={text}
                onChange={handleChange}
              ></textarea>
              <button
                className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 border-none outline-none text-white px-4 py-2 rounded-md shadow-lg"
                disabled={text === ""}
              >
                Add
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default FormPanel;
