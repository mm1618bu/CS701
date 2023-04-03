class Person{
    protected name: string;
    protected id: string;

    constructor(name: string,id: string){
        this.name = name;
        this.id = id;
    }

    print(): string{
        return `Person: ${this.name} [${this.id}]`;
    }

    greet(msg: string = 'Hello'): string{
        return `${msg} ${this.name} [${this.id}]`;
    }
}

class Student extends Person{
    private program: string;

    constructor(name: string, id: string, program: string){
        super(name,id);
        this.program = program;
    }

    print(): string{
        return `Student: ${this.name} [${this.id}] : Program: {$this.program}`;
    }
    
}

let s1: Student = new Student("Alice", "123-45-1000", "WAD");
console.log(s1.print());