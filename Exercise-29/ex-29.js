// Exercise 29

async function GetData(){

 console.log("Beginning to Fetch Data");
 setTimeout( async ()=>{

 const response = await fetch('exercise29.json');

 const data = await response.json();

 console.log("Response", data)


}, 2000)

}

GetData()

