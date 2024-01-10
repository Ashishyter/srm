const dbConnect = require("./database/dbs")

const test = async () => {
  let data = await dbConnect();
  let list = await data.findOne({name:"pratik"});
  console.log(list)
}

test();
 