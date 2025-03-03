// ****** UNKNOWN TYPE ******

function func(data:unknown) {
    // Because data is of type unknown, we need to check if it is an object and if it has a name property
    if (data!=null && typeof data === "object" && "name" in data && typeof data.name === "string") {
        console.log(data.name.length)
    }
}


// unknown is better than any because it forces you to check the type of the data before using it