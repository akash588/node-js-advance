const { MongoClient } = require("mongodb");
const { Query } = require("mongoose");
const mega = require("./mega");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function MainMoongoDB() {
  // Database Name
  const dbName = "test";

 
   
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db =  client.db(dbName);
    const collection = db.collection("goals");
    try {

      
// await MongodbCRUDOperation(collection)
// await Aggregation(collection)
await Pagination(collection)
 return;
 


    } catch (ex) {
      console.log(ex);
    }
  

    MainMoongoDB()
    .then(console.log)
    .catch(console.error)
   
   
    .finally(() => client.close());
}

async function MongodbCRUDOperation (collection){
    // farmupdate = {
    //     name: "5",
    //     role: "5",
    //     age:5
    //   };
//  Insert Oprations::::::::
      // let response = await collection.insertOne(farmupdate);
      // console.log(response);  
    


    //  read Oprations::::::::
      // let response = await collection.find({name:"akash"}).toArray();
      // console.log(response);
      
      // readAll opration
      
      // let response = await collection.find().toArray();
      // console.log(response);

      //  update Oprations::::::::
    //   let response = await collection.updateOne({name:"akash"},{$set:{role:"farmer"}}); // you can use one more parameter {upsert:true}
    //  console.log(response);


       // Delete Oprations::::::::
    //  let response = await collection.deleteOne({name:"akash"});
    //  console.log(response);
    

}

async function  Aggregation (collection){
//  aggregation pipeline: MongoDB provides aggregation framework that follows the concept of data processing pipeline.

    // MATCH Query------------------------------

    // $match takes a document that specifies the query conditions. 
// The query syntax is identical to the read operation query syntax;


//    let matchquery =  await collection.aggregate([
//         { "$match": {name:"akash"} },
//         ]).toArray();
//         console.log(matchquery)

  // MATCH Query------------------------------
  // Passes along the documents with the requested fields
  //  let Projectquery =  await collection.aggregate([
  //       { "$project": {name: 1} },
  //       ]).toArray();
  //       console.log(Projectquery)









}

async function Pagination(collection){


  //   { offset: 3 }: skip first 3 items, fetch 5 remaining items.
  // { limit: 2 }: fetch first 2 items.
  //  { offset: 3, limit: 2 }: skip first 3 items, fetch 4th and 5th items.
let nPerPage = 2
let pageNumber = 1

  let paginationResult = collection.find().skip((pageNumber-1)*nPerPage).limit(nPerPage);
  paginationResult.forEach( function(student) { console.log(student.name); } )

  }

module.exports = MainMoongoDB;







