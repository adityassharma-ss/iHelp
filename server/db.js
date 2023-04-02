const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log("CONNECTED TO MONGO DB DATABASE ");
    });
};

module.exports = connectToMongo;


// const Connection = async (username, password) => {
//     const URL = `mongodb://${username}:${password}@ac-weqcjsy-shard-00-00.anrwitl.mongodb.net:27017,ac-weqcjsy-shard-00-01.anrwitl.mongodb.net:27017,ac-weqcjsy-shard-00-02.anrwitl.mongodb.net:27017/?ssl=true&replicaSet=atlas-1nbpc6-shard-0&authSource=admin&retryWrites=true&w=majority`;
//     try {
//         await mongoose.connect(URL, { useNewUrlParser: true })
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.log('Error while connecting to the database ', error);
//     }
// };

// export default Connection;