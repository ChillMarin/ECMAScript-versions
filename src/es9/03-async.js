async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hello");

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names =arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");

//aqui no se pide una promesa pero el await hace que no se evite de ejecutar el codigo de abajo es decir el "after"