const Axios = require("axios");

const query = `
mutation($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
}
`;

export default async function deleteUser(req, res) {
  console.log(req.body);
  const { id } = req.body;
  console.log();
  const variables = { id };
  console.log(variables);

  try {
    const result = await Axios({
      url: "https://graphql.fauna.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_GRAPHQL_SECRET_KEY}`,
      },
      data: { query, variables },
    });
    console.log("RESULT:", result.data);
    res.status(200).json({ users: result.data.data.updateUser });
  } catch (error) {
    res.status(500).send("Something went wrong.", error);
  }
}
