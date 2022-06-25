import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Post {
        id: String   
        created_at: String 
        updated_at: String 
        title: String
        content: String
        published: Boolean  
        image: String
        tags: [String]
        authorId: String
    }
    type Query {
        post: [Post]!
    }
`