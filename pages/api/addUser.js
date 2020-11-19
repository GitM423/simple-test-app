const Axios = require("axios");

const query = `
mutation($name: String!) {
    createUser(data: { name: $name }) {
      _id
      name
    }
  }
`;

export default async function addUser(req, res) {
  const { name } = req.body;
  const variables = { name };

  try {
    const result = await Axios({
      url: "https://graphql.fauna.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_GRAPHQL_SECRET_KEY}`,
      },
      data: { query, variables },
    });
    console.log("RESULT:", result.data.data.createUser);
    res.status(200).json({ users: result.data.data.createUser });
  } catch (error) {
    res.status(500).send("Something went wrong.", error);
  }
}
