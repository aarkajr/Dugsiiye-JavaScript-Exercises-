// EXercise 26

// Part one

function GetUserInformation(){
    alert("Getting User Information")

return{Name: "Ahmed", Nationality: "Somalia",email: "ahmed@gmail.com", City: "Jowhar"}
}

console.log("Loading To  Get user Information");

const user = GetUserInformation();
console.log("User Information", user);

console.log("This messege is being blocked until user Information is gotten.");





 
// Part two

console.log("Part two...................")




function GetUserInfor(callback){
setTimeout(() =>{
 const user = {Name: "Omar", Nationality: "Germany",email: "omr@gmail.com", City: "Barlin"}
 callback(user)

 }, 2000)
}

console.log("preparing  To  Get user Information");

GetUserInfor(function(user){

console.log(user)

})