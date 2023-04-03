interface Shape{
    numberOfDimensions: Number;
    area(): number;
    displayShape(): String;
}

class Rectangle implements Shape{

    numberOfDimensions: Number;

    width: number;
    height: number;

    constructor(width:number, height: number){
        this.numberOfDimensions = 2;
        this.width = width;
        this.height = height;
    }

    area(): number{
        return this.width * this.height;
    }

    displayShape(): String {
        let result: string = `A ${this.numberOfDimensions}D Shape with area ${this.area()}`;
        return result;
    }
}

let r:Rectangle = new Rectangle(10,20);
console.log(r);
console.log(r.displayShape());

class Cuboid implements Shape{

    numberOfDimensions: Number;

    length: number;
    width: number;
    height: number;

    constructor(length:number, width:number, height:number){
        this.numberOfDimensions = 3;
        this.length = length;
        this.width = width;
        this.height = height;
    }

    area(): number {
        return 2*(this.length * this.width + this.width * this.height + this.height * this.length);
    }

    volume(): number{
        return this.length * this.width * this.height;
    }

    displayShape(): string {
        let result: string = `A ${this.numberOfDimensions}D Shape with Surface Area ${this.area()} and Volume ${this.volume()}}`;
        return result;
    }
}

let c:Cuboid = new Cuboid(10,20,5);
console.log(c);
console.log(c.displayShape());