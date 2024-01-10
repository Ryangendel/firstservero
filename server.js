const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 65355
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


var bikes_db = [
    {bike_brand:"Santa Cruz", bike_name:"5010", price:"200", id:123},
    {bike_brand:"Pivot", bike_name:"Mach6", price:"300", id:234},
    {bike_brand:"Specialized", bike_name:"Stumpjumper", price:"400", id:345},
    {bike_brand:"Santa Cruz", bike_name:"hightower", price:"500", id:456},
]

//RESTful
//GRAPHQL
//MVC
//Model View Controller 

//collections
//=>{name:"runa"}, {dogname:"runa"}
function middleware(req, res, next){
    console.log("this is inside the server middleware")
    next()
}

app.use(express.static('build'))
// app.use(middleware)

//CRUD
//Create => POST
//Rread = GET
//Update = PUT
//Delete = DELETE 
//I/O

app.get("/getallbikes", middleware, (req,res)=>{
    res.json(bikes_db)
    // res.sendFile("index.html")
})

app.get("/home", middleware, (req,res)=>{
    res.send("Hello from your first server")
    // res.sendFile("index.html")
})

app.post("/bikeaction", middleware, (req, res)=>{
    console.log(req.body)
    //database logic
    bikes_db.push(req.body)
    res.send("recieved")
})

app.put("/bikeaction", middleware, (req, res)=>{
    console.log(req.body)
    //database logic
    bikes_db.push(req.body)
    res.send("recieved")
})

app.delete("/bikeaction/:id", middleware, (req, res)=>{
    console.log(req.params.id)
    //database logic
    var deleteIndex = null
    for (let i = 0; i < bikes_db.length; i++) {
        if(bikes_db[i].id==req.params.id){
            deleteIndex = i
        }
      }

      bikes_db.splice(deleteIndex, 1)

    res.send("recieved")
})


app.get("/specificbike/:id", middleware, (req,res)=>{
    const result = data.filter((x) => x.id !== 123);
    res.send("Hello from add bike")
    // res.sendFile("index.html")
})


app.get("/addbike", middleware, (req,res)=>{
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


// console.log(process.env.S3_BUCKET)

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT)
})