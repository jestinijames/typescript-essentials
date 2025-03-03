// ****** DISCRIMINATED UNION ******

type SuccessApiResponse = {
    status: "Success";
    data: { id: string; name: string; };
}

type ErrorApiResponse = {
    status: "Error";
    errorMessage: string;
}



// type UserApiResponse = {
//     status: "Error" | "Success";
//     data?: { id: string; name: string; };
//     errorMessage?: string;
// }

// This is discriminated union type
// The status property is the discriminant property
type UserApiResponse = SuccessApiResponse | ErrorApiResponse;

function handleResponse(response: UserApiResponse) {
    if (response.status === "Success") {
        console.log(response.data.name)
    }
    else {
        console.log(response.errorMessage.length)
    }
}   