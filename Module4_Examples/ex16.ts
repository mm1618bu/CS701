class Person{
    private _name: string;
    private _id: string;

    set name(newValue: string){

        if(newValue && newValue.length > 1){
            this._name = newValue;
        } else{
            this.name = undefined;
        }
    }

    get name(): string{
        return this._name;
    }

    set id(newValue: string){

        if(newValue && newValue.match(/(\d){3}-(\d){2}-(\d){4}/)){
            this._id = newValue;
        } else{
            this._id = undefined;
        }
    }

    get id(): string{
        return this._id;
    }

    print(): string{
        return `Person: ${this.name} [${this.id}]`;
    }
}

let p1: Person = new Person();
p1.name = "Alice";
p1.id = "123451000";
console.log(p1.print());

p1.name = "A";
p1.id = "123-45-1000";
console.log(p1.print());

p1.name = "Alice";
console.log(p1.print());