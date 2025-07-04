# 🚀 Apollo Server API

GraphQL API for the Caputeeno e-commerce application.

## ⚡ Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3333`

## 📋 Schema

```graphql
type Product {
  id: ID!
  name: String!
  description: String!
  image_url: String!
  category: String!
  price_in_cents: Int!
  sales: Int!
  created_at: String!
}

input ProductFilter {
  q: String      # Search query
  category: String # mugs, t-shirts
}

type Query {
  allProducts(perPage: Int, page: Int, filter: ProductFilter, sortField: String, sortOrder: String): [Product!]!
  _allProductsMeta(filter: ProductFilter): Meta!
  product(id: ID!): Product
}
```

## 🔍 Queries

### Get products with filtering & pagination
```graphql
query Products($perPage: Int!, $page: Int!, $filter: ProductFilter!, $sortField: String!, $sortOrder: String!) {
  allProducts(perPage: $perPage, page: $page, filter: $filter, sortField: $sortField, sortOrder: $sortOrder) {
    id
    name
    price_in_cents
  }
}
```

### Get product count
```graphql
query ProductMeta($filter: ProductFilter!) {
  _allProductsMeta(filter: $filter) {
    count
  }
}
```

### Get single product
```graphql
query Product($id: ID!) {
  product(id: $id) {
    id
    name
    description
    image_url
    category
    price_in_cents
  }
}
```

## 💡 Examples

```graphql
# Search products
{ allProducts(filter: { q: "camiseta" }) { name } }

# Filter by category
{ allProducts(filter: { category: "mugs" }) { name } }

# Sort by price
{ allProducts(sortField: "price_in_cents", sortOrder: "desc") { name price_in_cents } }

# Pagination
{ allProducts(perPage: 12, page: 0) { name } }
```

## 📊 Data

- 60 products generated with Faker
- Categories: `mugs`, `t-shirts`
- Price range: R$20.00 - R$100.00
- Random sales data included 