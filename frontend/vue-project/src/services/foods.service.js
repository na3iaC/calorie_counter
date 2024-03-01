const search = () =>{

    return fetch(`http://localhost:3333/search`)
    .then((response)=>{
        if(response.status === 200){
            return response.json();
        }else{
            throw "Something went wrong"
        }



    })
    .then((resJson)=>{
        return resJson


    })
    .catch((err)=>{
        console.log("Err",err)
        return Promise.reject(err)


    })
}

export const foodService={
    search,

}