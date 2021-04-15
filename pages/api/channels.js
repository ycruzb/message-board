const fetchGraphQL = require("../../utils/fetchGraphQL");

module.exports = async (req, res) => {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    console.error(errors);
  }

  res.status(200).json({ data });
};

const operationsDoc = `
	query MyQuery {
	  querychannel {
		id
		name
	  }
	}
  `;

function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, "MyQuery", {});
}
