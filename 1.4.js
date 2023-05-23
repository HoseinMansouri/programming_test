const _object = {
    "name": "John",
    "age": 30
};

const handler = {
    get: function (target, prop) {
        return "404";
    },
};

const proxy = new Proxy(_object, handler);

module.exports = {
    proxy
}


// Manual Test 

console.log(proxy.someProperty); // Output: "404"
console.log(proxy.anotherProperty); // Output: "404"
console.log(proxy.anyProperty); // Output: "404"