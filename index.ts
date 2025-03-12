class Person {
    constructor (private name: string, private age: number) {}

    printPersonInfo() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }

    isAdult(): boolean {
        return this.age >= 18
    }
}

const andy = new Person('Andy', 23);

console.log(andy.isAdult());
andy.printPersonInfo();