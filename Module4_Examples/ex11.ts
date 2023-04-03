class Person{
    name: string;
    id: string;

    constructor(name:string, id:string){
        this.name = name;
        this.id = id;
    }

    print(): string{
        return `Person: ${this.name} [${this.id}]`;
    }
}

let p1: Person = new Person("Alice", "123-45-1000");
console.log(p1.print());