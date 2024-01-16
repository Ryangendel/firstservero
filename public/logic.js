

fetch("/getallbikes")
  .then(data=>data.json())
  .then(function (cleanedData){
      console.log(cleanedData[0].bike_brand)
  
      cleanedData.forEach(bike=>{
          if(bike.bike_brand==="Pivot"){
          document.getElementById("bikebrand").innerHTML = bike.bike_brand
          document.getElementById("bikename").innerHTML = bike.bike_name
          document.getElementById("price").innerHTML = bike.price
          document.getElementById("color").innerHTML = bike.color
          }
      })
  })
