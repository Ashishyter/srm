require('dotenv').config()
const express = require("express");
const server = express();
const dbConnect = require("./database/dbs")




const PORT = process.env.PORT || 3000;

server.use(express.static("public"));
server.set("view engine","ejs");
server.set("views","views");

server.get("/",(req,res)=>{
   
   
    res.render("index",{fresh: false,registered:false});

    

});


server.get("/register",async (req,res)=>{
        
    let {rollno,name,email,address} = req.query;

    let data = await dbConnect();
let check = await data.findOne({rollno})

if(check){
    console.log("user exists")
    res.render("index",{fresh: false,registered:true});

}else{

    let list = await data.insertOne({rollno,name,email,address});

    if(list.insertedId){
        console.log("one record inserted")
        res.render("index",{fresh: true,registered:false});
    }

}

     
    // let sql = "INSERT INTO register VALUE (?,?,?,?)";
    // let check = "SELECT * FROM REGISTER WHERE ROLLNO = ? OR NAME = ? OR EMAIL = ?";
    
    // db.query(check,[rollno,name,email],(err,result)=>{

    //     if(err){
    //         console.log(err);
    //     }
    //     else if(result.length > 0){
    //         res.render("index",{registered: true,fresh:false});
    //     }
    //     else{

    //         db.query(sql,[rollno,name,email,address], function (err, result) {

    //                 if (err){
    //                     console.log(err)
    //                 }
    //                 else{
    //                     console.log("1 record inserted");
    //                     res.render("index",{fresh: true,registered:false});
    //                 }
    //        });
                 
            
    //     }
    // });
   
});

server.get("/view",async (req,res)=>{
// // res.render("view");
// let sql="SELECT * FROM REGISTER";
// db.query(sql,(err,result)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         res.render("view",{result});
//     }
// });

let data = await dbConnect();
let list = data.find({})

let result = await list.toArray();

res.render("view",{result});


console.log(result);


});

server.get("/search",(req,res)=>{

    res.render("search",{fresh:false});

});

server.get("/searchstudent",async (req,res)=>{

    let {rollno,name,email}=req.query;


    let data = await dbConnect();
let check = await data.findOne({rollno})

if(check){
    console.log("user exists")

    let {rollno,name,email,address}=check;

    res.render("searchstudent",{rollno,name,email,address});

}else{
    res.render("search",{fresh:true});
}   

    // let sql="SELECT * FROM REGISTER WHERE ROLLNO = ? AND NAME = ? AND EMAIL = ?";
    // db.query(sql,[rollno,name,email],(err,result)=>{

    //     if (err) {
    //         console.log(err);
    //     }
    //     else if(result.length > 0){

    //         let {ROLLNO,NAME,EMAIL,ADDRESS}=result[0];

    //          res.render("searchstudent",{ROLLNO,NAME,EMAIL,ADDRESS});
            
    //     }
    //     else{
    //         res.render("search",{fresh:true});
    //     }
    // });

    // // res.render("search");

});

server.get("/update",(req,res)=>{
    res.render("update",{fresh:false});
});

server.get("/updatestudent",async (req,res)=>{

    let {rollno,name,email}=req.query;

    let data = await dbConnect();
    let check = await data.findOne({rollno})
    
    if(check){
        console.log("user exists")
    
        let {rollno,name,email,address}=check;
    
        res.render("updatestudent",{rollno,name,email,address});
    
    }else{
        res.render("search",{fresh:true});
    }   
 
    // let sql="SELECT * FROM REGISTER WHERE ROLLNO = ? AND NAME = ? AND EMAIL = ?";
    // db.query(sql,[rollno,name,email],(err,result)=>{

    //     if (err) {
    //         console.log(err);
    //     }
    //     else if(result.length > 0){

    //         let {ROLLNO,NAME,EMAIL,ADDRESS}=result[0];

    //          res.render("updatestudent",{ROLLNO,NAME,EMAIL,ADDRESS});
            
    //     }
    //     else{
    //         res.render("search",{fresh:true});
    //     }
    // });
});

server.get("/updated", async (req,res)=>{

    let {rollno,email,address}=req.query;

    let data = await dbConnect();
    let check = await data.updateOne({rollno},{$set:{email,address}})
    
    if(check.modifiedCount){
        console.log("record updated")
        res.render("update",{fresh:true});

    
    }

    // let sql="UPDATE REGISTER SET EMAIL= ? , ADDRESS = ? WHERE ROLLNO = ?";

    // db.query(sql,[email,address,rollno],(err,result)=>{
    //     if (err) {
    //         console.log(err);
    //     }
    //     else{
    //         if (result.affectedRows > 0) {
    //             res.render("update",{fresh:true});
    //         }
    //     }
    // });

});

server.get("/delete",(req,res)=>{

    res.render("delete",{fresh:false,del:false});

});

server.get("/deletestudent",async (req,res)=>{

    let {rollno,name,email}=req.query;


    let data = await dbConnect();
    let check = await data.findOne({rollno})
    
    if(check){
        console.log("user exists")
    
        let {rollno,name,email,address}=check;
    
        res.render("deletestudent",{rollno,name,email,address});
    
    }else{
        res.render("delete",{fresh:true,del:false});
    }   
 

    // let sql="SELECT * FROM REGISTER WHERE ROLLNO = ? AND NAME = ? AND EMAIL = ?";
    // db.query(sql,[rollno,name,email],(err,result)=>{

    //     if (err) {
    //         console.log(err);
    //     }
    //     else if(result.length > 0){

    //         let {ROLLNO,NAME,EMAIL,ADDRESS}=result[0];

    //          res.render("deletestudent",{ROLLNO,NAME,EMAIL,ADDRESS});
            
    //     }
    //     else{
    //         res.render("search",{fresh:true});
    //     }
    // });


});

server.get("/deleted",async (req,res)=>{

    let {rollno}=req.query;

    let data = await dbConnect();
    let check = await data.deleteOne({rollno})
    
    if(check.deletedCount){
        console.log("record deleted")
        res.render("delete",{fresh:false,del:true});

    
    }

    // let sql="DELETE FROM REGISTER WHERE ROLLNO = ?";
    // db.query(sql,[rollno],(err,result)=>{

    //     if (err) {
    //         console.log(err);
    //     }
    //     else if(result.affectedRows > 0){


    //          res.render("delete",{del:true,fresh:false});
            
    //     }
    // }); 

});
server.listen(PORT , function(err){
      console.log(`Server is listening at ${PORT}`);
});