# Apollo Server API

A GraphQL API built with Apollo Server that serves product data.

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3333`

## GraphQL Playground

Once the server is running, you can access the GraphQL Playground at:
`http://localhost:3333`

## Available Queries

### Get all products
```graphql
query {
  products {
    id
    name
    description
    image_url
    category
    price_in_cents
    sales
    created_at
  }
}
```

### Get a specific product by ID
```graphql
query {
  product(id: "product-id-here") {
    id
    name
    description
    image_url
    category
    price_in_cents
    sales
    created_at
  }
}
```

### Get products by category
```graphql
query {
  productsByCategory(category: "mugs") {
    id
    name
    description
    image_url
    category
    price_in_cents
    sales
    created_at
  }
}
```

### Get paginated products
```graphql
query {
  productsPaginated(page: 1, limit: 5) {
    id
    name
    description
    image_url
    category
    price_in_cents
    sales
    created_at
  }
}
```

## Data Structure

The API serves products with the following structure:
- `id`: Unique product identifier
- `name`: Product name
- `description`: Product description
- `image_url`: URL to product image
- `category`: Product category (mugs, t-shirts)
- `price_in_cents`: Price in cents
- `sales`: Number of sales
- `created_at`: Creation date

## Categories

Available product categories:
- `mugs`: Coffee mugs and cups
- `t-shirts`: T-shirts and clothing 