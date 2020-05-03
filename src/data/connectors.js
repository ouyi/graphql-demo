import mongoose from "mongoose";
import Sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

mongoose.Promise = global.Promise;

const mongodbHost = process.env.MONGODB_HOST || 'localhost'

console.log(mongodbHost);

mongoose.connect(`mongodb://${mongodbHost}/friends`, {
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

const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite'
});

const Alien = sequelize.define('aliens', {
    name: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING },
});

Alien.sync({ force: true }).then( () => {
    _.times(10, (i) => {
        Alien.create({
            name: casual._name(),
            planet: casual._word()
        })
    })
})

export { Friend, Alien };
