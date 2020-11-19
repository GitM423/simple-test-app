const Axios = require("axios");

const query = `
query {
    allUsers {
      data {
        _id
        name
      }
    }
  }
`;

export default async function getUsers(req, res) {
  try {
    const result = await Axios({
      url: "https://graphql.fauna.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_GRAPHQL_SECRET_KEY}`,
      },
      data: { query },
    });
    console.log("RESULT:", result.data.data.allUsers.data);
    res.status(200).json({ users: result.data.data.allUsers.data });
  } catch (error) {
    res.status(500).send("Something went wrong.", error);
  }
}
