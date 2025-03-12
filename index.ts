class Person {
    constructor (private name: string, private age: number) {}

    printPersonInfo() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }
}

const andy = new Person('Andy', 22);
andy.printPersonInfo();