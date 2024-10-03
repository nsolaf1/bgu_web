let age = 15
try {
    //logic of code
    if(!isNaN(age)){
        throw new Error("Error Input")
    }


} catch(error) {
    console.log(error.message);
}