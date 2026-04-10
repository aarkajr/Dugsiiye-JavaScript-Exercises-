


// EXERCISE 15

const students = [
   
    {
        name: "Saacid",
        Age:  20,
        City: "Mogadisho"
    },
    {
        name: "Ibraahim",
        Age:  19,
        City: "Kismaayo"
    },
    {
        name: "Yuusuf",
        Age:  24,
        City: "Burco"
    }
];




console.log("properties and values of each student");
for (const student of students){
    for(const key in student){
        console.log(key + ": " + student[key]);
    }
    console.log("-------")
}




