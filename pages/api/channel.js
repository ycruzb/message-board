const fetchGraphQL = require("../../utils/fetchGraphQL");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { channelId, text } = req.body;

    const { errors, data } = await executeMyMutation(text, channelId);

    if (errors) {
      console.error(errors);
    }

    res.status(200).json({ data });
  } else {
    res.status(404).json({ error: "Not found" });
  }
};

const operationsDoc = `
	mutation MyMutation($text: String = "dorum sit amet", $id: ID = "0x7533") {
	  addmessage(input: {text: $text, channel: {id: $id}}) {
		numUids
	  }
	}
  `;

function executeMyMutation(text, id) {
  return fetchGraphQL(operationsDoc, "MyMutation", { text: text, id: id });
}
