// Exercise 31


async function usersData() {

    try{
        console.log("Requesting to fetch User's Data")
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
             throw new error (`HTTP error: ${response.status}`)}

             const data = await response.json()

             console.log(data)



    }catch(Error){

        console.log(Error)

    }
    
}
usersData()