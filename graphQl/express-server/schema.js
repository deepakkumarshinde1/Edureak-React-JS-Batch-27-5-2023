const userData = require("./db.json");
const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = graphql;

// type is structure ==> User
let UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => {
    return {
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      email: { type: GraphQLString },
      gender: { type: GraphQLString },
    };
  },
});
// read a data
let RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUserList: {
      type: new GraphQLList(UserType),
      args: {},
      resolve: (parent, args) => {
        // let filterResult = userData.filter(
        //  (user) => user.gender === args.gender
        //);
        // SELECT * FROM user WHERE gender = 'args.gender'; ==> MYSQL
        // users.find({gender:args.gender}); ==> MongoDB
        return userData;
      },
    },
  },
});

let schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
// export default schema
// module.exports = schema
