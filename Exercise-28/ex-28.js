// Exercise 28

function GetUserData(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            const job = true; 

        if (job){
            resolve({Name: "Ahmed", Level: "MasterDegree", ID: 2026})
        } else{
            reject("Failed to pass the requirments")
        }



        }, 2000)
    })
}

 async function displayUserData (){


    try{
        const user = await GetUserData();
        console.log(user)

    }  catch(error){
    console.log(error)
    }
}
displayUserData()