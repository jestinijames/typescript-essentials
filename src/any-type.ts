// ****** ANY TYPES ******

let a:any = 4;
a=3;
a="sdf"

// here b is any as it does not know wht is returned
const b = JSON.parse("sdsdsa");

const c = fetch("sds").then(res => res.json()).then(data => {
    // here data is of type any as ts does not know what type of data is coming in
    data
})
