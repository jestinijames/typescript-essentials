// ****** ASYNC FUNCTIONS ******


function wait(duration:number): Promise<string> {
    return new Promise<string>((resolve)=> {
setTimeout(()=> resolve(`Done waiting for ${duration} ms`), duration)
    })
}


wait(1000).then((res)=> console.log(res));


async function waitAsync(duration:number): Promise<string> {
   
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    setTimeout(() => console.log(data), duration);
    return `Done waiting for ${duration} ms`;
    

}

waitAsync(1000).then((res)=> console.log(res));

