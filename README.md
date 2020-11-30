# React Shop Demo

This project was created with Create React App. It uses React, Apollo, GraphQL and Fauna.

Demo: [https://react-shop-demo.vercel.app/](https://react-shop-demo.vercel.app/)

## Getting started

Clone repository and install npm dependencies

```bash
git clone git@github.com:alexanderalmstrom/react-shop-demo.git && cd react-shop-demo && yarn
```

Create a `.env` file in the root directory with your generated Fauna secret.

```env
REACT_APP_FAUNA_SECRET=XXX
```

Import GraphQL schema in Fauna to create a new Collection in the database. Use the `schema.gql` located in the root directory.

Create some products in Fauna GraphQL playground. For example:

```graphql
mutation CreateProduct {
  createProduct(data: { name: "Sneaker", price: 999.95 }) {
    name
    price
  }
}
```

Run development server

```bash
yarn start
```

Build production files

```bash
yarn build
```

Run production build locally

```bash
npx serve build
```
