// Exercise 27


function GetUserData(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            const job = true; 

        if (job){
            resolve({Name: "Ahmed", Level: "HighSchool", ID: 2026})
        } else{
            reject("Failed to pass the requirments")
        }



        }, 2000)
    })
}

GetUserData()
.then((data)=> console.log("Employee Data", data))
.catch((Error)=> console.log(error))

