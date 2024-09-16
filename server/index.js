const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 65355
var bodyParser = require('body-parser')
const path = require('path')

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const dbName = 'myProject';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const db = client.db(dbName);

const collection = db.collection('documents');
// Database Name

client.connect();

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
    // const insertResult = await collection.insertMany([{ banana: [1,2,3,4,5,6], name:"ryan"}]);
    return 'done.';
  }
  

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() =>
  {
   // return client.close()
    });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('build'))


var bikes_db = [
    {bike_brand:"Santa Cruz", bike_name:"5010", price:"200",color:"gray", id:123, img:"https://cdn.pixabay.com/photo/2013/03/19/18/23/mountain-biking-95032_1280.jpg"},
    {bike_brand:"Pivot", bike_name:"Mach6", price:"300",color:"green", id:234, img:"https://cdn.outsideonline.com/wp-content/uploads/2023/05/mtb-accessories-sgg23_s.jpg"},
    {bike_brand:"Specialized", bike_name:"Stumpjumper", price:"400",color:"red",  id:345},
    {bike_brand:"Santa Cruz", bike_name:"hightower", color:"blue", price:"500", id:456},
]

//RESTful
//GRAPHQL
//MVC
//Model View Controller 

//collections
//=>{name:"runa"}, {dogname:"runa"}
function getUserInfo(req, res, next){
    console.log("make a request to Firebase Auth")
    next()
}


// app.use(middleware)

//CRUD
//Create => POST
//Read = GET
//Update = PUT
//Delete = DELETE 
//I/O
//const temp = []
//for res==data.rest
//temp.push(res[i])
app.get("/home", async (req,res)=>{
    res.send("working")
})

app.get("/getrest", getUserInfo,  async (req,res)=>{
    console.log("make a request to Firebase Auth")
    res.json(data)
})

app.get("/logout", getUserInfo,  async (req,res)=>{
    console.log("make a request to Firebase Auth")
    res.json(data)
})

app.get("/login", getUserInfo,  async (req,res)=>{
    //Logic to login
    res.json(data)
})

app.get("/insertdogs/:owner/:dog1/:dog2/:dog3", async (req,res)=>{
    var name1 = req.params.dog1
    var name2 = req.params.dog2
    var name3 = req.params.dog3
    var dogArray = []

    if(name1 && name2 && name3){
        dogArray=[name1, name2, name3]
    }
    if(name1 && name2){
        dogArray=[name1, name2]
    }
    if(name1){
        dogArray=[name1, name2]
    }

    const insertResult = await collection.insertMany([{ dogs: dogArray, owner:req.params.owner}]);
    res.json(insertResult)
    // res.sendFile("index.html")
})

app.post("/insertdogs", async (req,res)=>{
    var owner = req.body.owner
    var name1 = req.body.dog1
    var name2 = req.body.dog2
    var name3 = req.body.dog3
    console.log(req.body)
    var dogArray = []

    if(name1){
        dogArray=[name1]
    }

    if(name1 && name2){
        dogArray=[name1, name2]
    }

    if(name1 && name2 && name3){
        console.log("INSIDE 3")
        dogArray=[name1, name2, name3]
    }
    const insertResult = await collection.insertMany([{ dogs: dogArray, owner:owner}]);
    const update = collection.updateOne( { title: owner }, { $set: { likes: 2 } } ) 
    res.json(insertResult)
    // res.sendFile("index.html")
})


app.put("/updatedogs/:ownername", async (req,res)=>{
    console.log(req.params.ownername)
    console.log(req.body)
    const insertResult = collection.updateOne({ owner: req.params.ownername }, { $push: { dogs: req.body.newdog } } ) 
    res.json(insertResult)
    // res.sendFile("index.html")
})

app.get("/getallbikes", (req,res)=>{
    res.json(bikes_db)
    // res.sendFile("index.html")
})

app.get("/home", (req,res)=>{
    res.send("Hello from your first server")
    // res.sendFile("index.html")
})

app.post("/bikeaction", (req, res)=>{
    console.log(req.body)
    //database logic
    bikes_db.push(req.body)
    res.send("received")
})


app.put("/bikeaction/:id", (req, res)=>{
    //database logic
    console.log(req.query)
    bikes_db.forEach((bike)=>{
        if(bike.id===parseInt(req.params.id)){
            bike.color=req.body.color
        }
    })
    res.send("received")
})


app.put("/deposit/:id", (req, res)=>{
    //database logic
    console.log(req.query)
    bikes_db.forEach((bike)=>{
        if(bike.id===parseInt(req.params.id)){
            bike.color=req.body.color
        }
    })
    res.send("received")
})

app.put("/withdraw/:id", (req, res)=>{
    //database logic
    console.log(req.query)
    bikes_db.forEach((bike)=>{
        if(bike.id===parseInt(req.params.id)){
            bike.color=req.body.color
        }
    })
    res.send("received")
})

app.put("/bikeaction", (req, res)=>{
    //database logic
    console.log(req.query)
    bikes_db.forEach((bike)=>{
        if(bike.id===parseInt(req.params.id)){
            bike.color=req.body.color
        }
    })
    res.send("received")
})

app.patch("/bikeaction/:id", (req, res)=>{
    console.log(req.params.id)
    console.log(typeof req.params.id)
    //database logic
    var deleteIndex = null
    for (let i = 0; i < bikes_db.length; i++) {
        if(bikes_db[i].id==req.params.id){
            deleteIndex = i
        }
      }

      bikes_db.splice(deleteIndex, 1)

    res.send("received")
})


app.delete("/bikeaction/:id", (req, res)=>{
    console.log(req.params.id)
    console.log(typeof req.params.id)
    //database logic
    var deleteIndex = null
    for (let i = 0; i < bikes_db.length; i++) {
        if(bikes_db[i].id==req.params.id){
            deleteIndex = i
        }
      }

      bikes_db.splice(deleteIndex, 1)

    res.send("received")
})


app.get("/specificbike/:id", (req,res)=>{
    const result = bikes_db.filter((x) => x.id !== 123);
    res.send("Hello from add bike")
    // res.sendFile("index.html")
})


app.get("/homepage", (req,res)=>{
   res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.get("/addbike", (req,res)=>{
    res.send("Hello from add bike")
    // res.sendFile("index.html")
})


app.get("/bikes/:bikeid",(req,res)=>{
    // db.getCollection("customers").find({id:req.params.bikeid})
    // .then((data)=>data.json())
    // .then(cleanedData =>{
    //     res.json(cleanedData)
    // })
    var arr = [12,3,4,5,6]
    
    res.send("works")
})

//RESTful applications
//GraphQL




app.listen(PORT, ()=>{
    console.log("listening on port " + PORT)
})