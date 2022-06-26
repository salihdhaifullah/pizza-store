import prisma from "../libs/prisma/prisma";

export const resolvers = {

    Query: {
        Posts: (parent: any, _args: any, ctx: any) => {
            return prisma.post.findMany({
                where: {
                    id: parent.id,
                },
            });
        },


        Users: (parent: any, _args: any, ctx: any) => {
            return prisma.user.findMany({
                where: {
                    id: parent.id,
                },
            });
        }
    },

    Mutation: {
        createPost: (parent: any, args: any, ctx: any) => {
            return prisma.post.create({
                data: {
                    title: args.title,
                    content: args.content,
                    image: args.imageUrl,
                    authorId: args.authorId,
                    tags: args.tags,
                },
            });
        },
        login: (parent: any, args: any, ctx: any) => {
            return prisma.user.findMany({
                where: {
                    email: args.email,
                    password: args.password,
                },
            });
        },
        createUser: (parent: any, _args: any, ctx: any) => {
            return prisma.user.create({
                data: {
                    name: _args.name,
                    email: _args.email,
                    password: _args.password,
                    role: _args.role,
                },
            });
        }

    }
}
