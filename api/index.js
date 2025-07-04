const { ApolloServer, gql } = require('apollo-server');
const { products } = require('./db');

// GraphQL schema definition
const typeDefs = gql`
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

  type Meta {
    count: Int!
  }

  input ProductFilter {
    q: String
    category: String
  }

  type Query {
    allProducts(perPage: Int, page: Int, filter: ProductFilter, sortField: String, sortOrder: String): [Product!]!
    _allProductsMeta(filter: ProductFilter): Meta!
    product(id: ID!): Product
  }
`;

// Helper function to filter products
const filterProducts = (products, filter) => {
  if (!filter) return products;
  
  return products.filter(product => {
    // Filter by search query (q)
    if (filter.q && filter.q.trim() !== '') {
      const searchTerm = filter.q.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                           product.description.toLowerCase().includes(searchTerm);
      if (!matchesSearch) return false;
    }
    
    // Filter by category
    if (filter.category && filter.category.trim() !== '') {
      if (product.category.toLowerCase() !== filter.category.toLowerCase()) {
        return false;
      }
    }
    
    return true;
  });
};

// Helper function to sort products
const sortProducts = (products, sortField, sortOrder) => {
  if (!sortField) return products;
  
  const sorted = [...products].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    // Handle string comparison
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (aValue < bValue) return sortOrder === 'desc' ? 1 : -1;
    if (aValue > bValue) return sortOrder === 'desc' ? -1 : 1;
    return 0;
  });
  
  return sorted;
};

// Resolvers
const resolvers = {
  Query: {
    allProducts: (_, { perPage = 12, page = 0, filter, sortField, sortOrder = 'asc' }) => {
      let filteredProducts = filterProducts(products, filter);
      let sortedProducts = sortProducts(filteredProducts, sortField, sortOrder);
      
      // Apply pagination
      if (perPage && page !== undefined) {
        const startIndex = page * perPage;
        const endIndex = startIndex + perPage;
        return sortedProducts.slice(startIndex, endIndex);
      }
      
      return sortedProducts;
    },

    _allProductsMeta: (_, { filter }) => {
      const filteredProducts = filterProducts(products, filter);
      return {
        count: filteredProducts.length
      }
    },

    product: (_, { id }) => {
      return products.find(product => product.id === id);
    }
  }
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

// Start the server
server.listen({ port: 3333 }).then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
  console.log(`📊 GraphQL Playground available at ${url}`);
  console.log(`📦 Total products loaded: ${products.length}`);
}); 