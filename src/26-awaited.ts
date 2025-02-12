// ****** AWAITED ******

async function wait(duration:number): Promise<string> {
    return new Promise<string>((resolve)=> {
setTimeout(()=> resolve(`Done waiting for ${duration} ms`), duration)
    }
      )
}

// What awaited does here is that it gets the return type of the promise
// So in this case, it gets the string type
type Value = Awaited<ReturnType<typeof wait>>;