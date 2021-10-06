## Tech Stack & Process

NextJS
React (hooks/functional)
TypeScript
Context API
Custom Hooks
Apollo Client
GraphQL 

I loaded the `fe-test.json` through Hasura into a Postgress DB which then got transformed into a GraphQL schema and API that can be access publicly at [https://vitl-hasura.herokuapp.com/v1/graphql](https://vitl-hasura.herokuapp.com/v1/graphql)

Data payload types should be generated from the GraphQL schema, but there were some out of scope TS issues (💆‍♀️) 


## Version Info

Node v14.17.9
Yarn 1.22.5

## Running the Project

Install dependencies with `yarn install` then run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

