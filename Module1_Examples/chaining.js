function SuperType(){
    this.colors = ["red","blue","green"];
}

function SubType(){
}

SubType.prototype = new SuperType();

var x1 = new SubType();
x1.colors.push("black");
console.log(x1.colors);

var x2 = new SubType();
console.log(x2.colors);

var x3 = new SuperType();
console.log(x3.colors);