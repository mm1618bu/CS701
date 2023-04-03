class Person{
    name: string;
    id: string;

    constructor(name:string,id:string){
        this.name = name;
        this.id = id;
    }

    print():string{
        return `Person: ${this.name} [${this.id}]`;
    }

    greet(msg: string = 'Hello '): string{
        return `${msg} ${this.name} [${this.id}]`;
    }
}

let p1 = new Person("Alice", "123-45-1000");
console.log(p1.print());

console.log(p1.greet());

console.log(p1.greet('Welcome'));