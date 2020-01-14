
function fun(){
let obj1 = fetch("http://127.0.0.1:5500/sample.json")

 .then(function(resp){
   return resp.json();

 })
.then(function(data) {
//  let newArray = data.filter(function(obj,index){
//     console.log("element",obj)
//     console.log("index",index)
    
//     return obj.country  == "Argentina";
//});
//-----------------Get all data for the country “Argentina”. [all data]


// let newArray = data.filter((obj,index)=>{

//         console.log("ele",obj)
//         console.log("ind",index)
//         return Number(obj.population) > 5
//});
//----------------Get all data with population greater than 8 million. [all data]

//  let ob1 = data.sort(function(a, b){
//     if(a.country < b.country) { return -1; }
//     if(a.country > b.country) { return 1; }
//     return 0;
// })         
// console.log(ob1)
//----------------Sort all the countries by name and print them all. [all data]


 

// let objcountry= data.filter(function (data) {
//     return data.country === "China";
//   });
//   console.log(objcountry)
//   var objcity = objcountry.map(function (objcountry) {
//     return objcountry.city
//   });
//   console.log(objcity)
//--------------------Get all the Cities of the country “China”. [Array of only cities]


// let objfrance= data.filter(function (data) {
//     return data.country === "France";
//   });
//   console.log(objfrance)
//    objfrance.filter(function(objfrance){
  
//     if(objfrance.city ==='Paris 17'){
//   console.log(objfrance)
      
//     }
//   });
  
//-----------------------------------Get all the details of the country “France” and display all details if city is Paris. [single Object]


// index = data.findIndex(x => x.city ==="Jilma");

// console.log(index);

//-----------------------Get the index of city “Jilma” in given data [Number]




//  let ob1 = data.sort(function(a, b){
//      if(Number(a.population > b.population)) { return -1; }
//      if(Number(a.population < b.population)) { return 1; }
//      return 0;
//  })         
//  //console.log(ob1)
//  let topten = ob1.slice(0, 10);
// console.log(topten)
//-----------------------------Get top ten countries data with respect to population. [Array of only countries]



// let unique = [...new Set(data.map(x => x.country))]

// console.log(unique)

//----------------------------Get unique country names in the given data. [Array of only countries]

// let objfrance = data.filter(function (data) {
//     return data.country === "France";
    
//   });
// console.log(objfrance)
// let x = (Number(objfrance[0].population) + Number(objfrance[1].population)) ; 

//  console.log(x)


//----------------------------Get total population of country “France” [array]

  
 
//      let t = data.map(f=>f.country);
//                 let test=[];
//                 t.forEach((type) => {

//                    let typeCount = 0;
//                    data.forEach((alert) => {
//                       if (type == alert['country']) 
//                        {
//                                  typeCount++;
//                     }
//                    });
//                    test.push({ title: type, count: typeCount });
//                 }) 
                    //console.log(test)
//-------------------------------Get total count of occurrence of each country in given data [Array of object]





 

})

  



}