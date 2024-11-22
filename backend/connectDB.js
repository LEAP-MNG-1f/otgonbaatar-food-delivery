import { MongoClient } from "mongodb";

const connectString =
  "mongodb+srv://theotgonbaatar56:YXjGni3aMHaC35TW@otgonbaatar-test.7rcg2.mongodb.net/";
const connectDB = async () => {
  const client = new MongoClient(connectString);
  let connection;

  try {
    connection = await client.connect();
  } catch (error) {
    console.log(error);
  }
  const db = connection.db("food-delivery");
  return db;
};

export default connectDB;
