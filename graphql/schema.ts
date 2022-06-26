import { gql } from "apollo-server-micro";
export const typeDefs = gql`

    type Post {
        id: String
        title: String
        content: String
        imageUrl: String
        createdAt: String
        updatedAt: String
        authorId: String
        tags: [String]
    }

    type User {
        id: String
        name: String
        email: String
        image: String
        createdAt: String
        role: String
        password: String
        posts: [Post]
    }

    type Comment {
        id: String
        content: String
        createdAt: String
        updatedAt: String
        authorId: String
        postId: String
    }

    type Query {
        Posts: [Post]!
        Users: [User]!
        Comments: [Comment]!
    }

    type Mutation {

        createPost(
            title: String
            content: String
            imageUrl: String
            authorId: String
            tags: [String]
        ): Post

        createUser(
            name: String
            email: String
            password: String
            role: String
        ): User

        commentPost(
            postId: String
            content: String
            authorId: String
        ): Comment

        login(
            email: String 
            password: String 
            name: String
            ): User
    }
`;