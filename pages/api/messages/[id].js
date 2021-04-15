const fetchGraphQL = require("../../../utils/fetchGraphQL");

module.exports = async (req, res) => {
  const { id } = req.query;
  const { errors, data } = await fetchMyQuery(id);

  if (errors) {
    console.error(errors);
  }

  res.status(200).json({ data });
};

const operationsDoc = `
  query MyQuery($id: ID = "0x7533") {
    getchannel(id: $id) {
      messages {
        id
        text
      }
    }
  }
`;

function fetchMyQuery(id) {
  return fetchGraphQL(operationsDoc, "MyQuery", { id: id });
}
