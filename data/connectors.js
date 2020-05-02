import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    //useNewUrlParser: true,
    //useMongoClient: true,
    user: "mongo_user",
    pass: "mongo_pass"
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    },
});

const Friend = mongoose.model('friends', friendSchema);

export { Friend };