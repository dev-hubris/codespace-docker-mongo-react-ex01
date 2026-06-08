require("dotenv").config()
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
if (!uri){
  console.err("MONGODB_URI 부재. .env 파일 확인 바람.")
}
const client = new MongoClient(uri);
const dbName = "carshop";
const collectionName = "car";

async function getCarList() {
  try {
    await client.connect();
    console.log("MongoDB Atlas 접속 성공");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const carList = await collection.find().toArray();

    console.log("car 목록:");
    console.log(carList);
  } catch (err) {
    console.error("car 목록 조회 실패:", err.message);
  } finally {
    await client.close();
  }
}

getCarList();

// async function main() {
//   try {
//     await client.connect();
//     console.log("MongoDB Atlas 연결 성공");

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     const cars = await collection.find().toArray();
//     console.log(cars);
//   } catch (err) {
//     console.error("MongoDB 연결 실패:", err);
//   }
// }

// main();