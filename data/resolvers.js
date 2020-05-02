import { Friend } from './connectors';

export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDB[id]);
        }
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const friend = new Friend({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts,
            });

            friend.id = friend._id;

            return new Promise((resolve, object) => {
                friend.save((err) => {
                    if (err)
                        reject(err)
                    else
                        resolve(friend)
                });
            });
        },
    },
};
