const MessagesPanel = ({ selectedChannel, messages }) => {
  return (
    <>
      {selectedChannel && (
        <>
          <h1 className="text-2xl font-semibold mb-3">Messages</h1>
          {messages && messages.length === 0 ? (
            <p className="text-gray-800">No messages yet on this channel</p>
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {!messages ? (
                <ul className=" animate-pulse">
                  <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
                  <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
                  <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
                  <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
                  <li className="my-2 cursor-pointer bg-gray-200 py-2 h-5"></li>
                </ul>
              ) : (
                <ul>
                  {messages.map((item, index) => (
                    <li key={index} className="my-1">
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MessagesPanel;
