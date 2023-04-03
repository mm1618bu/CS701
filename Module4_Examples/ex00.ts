class Person{
    name: string;
    id: string;

    print(): string{
        return `Person: ${this.name} [${this.id}]`;
    }
}

let p1: Person = new Person();
console.log(p1.print());

p1.name = "Alice";
p1.id = "123-45-1000";
console.log(p1.print());