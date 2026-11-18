try{
    let greet={
        name:"arun",
        location:"pondy",  //// Code that may cause an error
        age:25
    }
    let result = greet.dob();
    console.log(result);
}catch(error){              //// Handle the error
    console.log("given detials are not find")
}finally{
    console.log("it will exicute")
}
//Here, dob is not defined, so JavaScript throws a ReferenceError. The catch block handles it.