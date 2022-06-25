import { gql } from "@apollo/client";

export const INSERT_POST = gql`
    mutation InsertPost($image: String! $body: String! $title: String! $tags: String! $userName: String!) {
        insertPost(image: $image body: $body title: $title tags: $tags userName: $userName) {
            id
            body
            title
        }
    }`;

