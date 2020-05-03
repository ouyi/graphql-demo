import { Friend, Alien } from './connectors';

export const resolvers = {
    Query: {
        getFriend: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Friend.findById(id, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        },
        getAliens: () => {
            return Alien.findAll();
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

            return new Promise((resolve, reject) => {
                friend.save((err) => {
                    if (err)
                        reject(err)
                    else
                        resolve(friend)
                });
            });
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, reject) => {
                Friend.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, res) => {
                    if (err)
                        reject(err)
                    else
                        resolve(res);
                });
            });
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Friend.remove({ _id: id }, (err) => {
                    if (err)
                        reject(err)
                    else
                        resolve("Successfully deleted friend: " + id);
                });
            });
        },
    },
};
