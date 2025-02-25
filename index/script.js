function greet(name) {
    console.log('Hello, ' + name);
}
greet('Alice');

let person = {
    name: 'Alice',
    age:25,
    greet: function() {
        console.log('Hello');
    }
};

console.log(person.name);
person.greet();

