
window.addEventListener("load", (event) => {
    document.getElementById("testing").innerHTML = "helllo"
  });


  
fetch("/getallbikes")
  .then(data=>data.json())
  .then(function (cleanedData){
      cleanedData.forEach(bike=>{
          if(bike.bike_brand==="Pivot"){
          document.getElementById("bikebrand").innerHTML = bike.bike_brand
          document.getElementById("bikename").innerHTML = bike.bike_name
          document.getElementById("price").innerHTML = bike.price
          document.getElementById("color").innerHTML = bike.color
          }
      })
  })
