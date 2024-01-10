const {MongoClient} = require("mongodb");

const connectDB = async ()=>{
    

const username = encodeURIComponent("ashishyter");
const password = encodeURIComponent("Ashish@2615");

const uri = `mongodb+srv://${username}:${password}@cluster0.yo1zukm.mongodb.net/?retryWrites=true&w=majority`;


    
    const client = new MongoClient(uri);

//   try {

    const mongo = await client.connect();


    // const database = client.db("ashish");
    // const crud = database.collection("crud");
    // const data = await crud.findOne();

    // console.log(data);
    // await listDatabases(client);

    // await createListing(client,{
    //     name:"ram",
    //     add:"ayodhya"
    // });

    // await createMultipleListing(client,[
    //     {
    //         name:"akash",
    //         add:"kaulapur"
    //     },
    //     {
    //         name:"ritesh",
    //         add:"chhatami"
    //     },
    //     {
    //         name:"pratik",
    //         add:"gyanpur"
    //     }
    // ]);

    // await findOneList(client, "anuj");

    // await findAllList(client);

    // await updateListingByName(client, "ashish", { name: "ashish vishwakarma", add: "gerai gopiganj" });

    // await deleteListingByName(client, "anuj");



//   } catch(e){

    // console.error(e);

//   }finally {

//     await client.close();

//   }
}

module.exports = connectDB;
// run().catch(console.error);



// // show dblist

// async function listDatabases(client){

//     const dblist = await client.db().admin().listDatabases();
//     console.log("DataBases:");
//     dblist.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     });

// }

// // insertOne


// async function createListing(client,newListing){
//     const result = await client.db("ashish").collection("crud").insertOne(newListing);
    
//     console.log(`New listing created with the following id: ${result.insertedId}`);

// }

// // insertMany

// async function createMultipleListing(client,newListing){
//     const result = await client.db("ashish").collection("crud").insertMany(newListing);
    
//     console.log(`${result.insertedCount} new listings are created with the following id(s):`);
//     console.log(result.insertedIds);

// }

// // findOne

// async function findOneList(client,nameOfListing){
//     const result = await client.db("ashish").collection("crud").findOne({name: nameOfListing});

//     if(result){
//         console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
//         console.log(result);
//     }
//     else{
//         console.log(`No listibgs found with the name '${nameOfListing}'`);
//     }
// }

// // findMany

// async function findAllList(client){
//     const result = await client.db("ashish").collection("crud").find();
 
//     const results = await result.toArray();

//     if(results.length > 0){
//         results.forEach(list =>{
//             console.log(list);
//         });
//     }
//     else{
//         console.log("No Listings found");
//     }

// }

// // updateOne

// async function updateListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("ashish").collection("crud").updateOne({ name: nameOfListing }, { $set: updatedListing });

//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
//     console.log(`${result.modifiedCount} document(s) was/were updated.`);
// }
 
// // deleteOne

// async function deleteListingByName(client, nameOfListing) {
//     const result = await client.db("ashish").collection("crud").deleteOne({ name: nameOfListing });
//     console.log(`${result.deletedCount} document(s) was/were deleted.`);
// }