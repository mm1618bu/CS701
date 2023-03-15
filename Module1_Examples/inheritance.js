//First Function
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

var x = new SuperType();
console.log(x.getSuperValue());

console.log(x instanceof Object);
console.log(x instanceof SuperType);

console.log(Object.prototype.isPrototypeOf(x));
console.log(SuperType.prototype.isPrototypeOf(x));

// Second Function

function SubType(){
    this.subproperty = false;
}

// inherit from supertype

SubType.prototype = new SuperType();

// Add new methods

SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var y = new SubType();
console.log(y.getSuperValue());
console.log(y.getSubValue());

console.log(y instanceof Object);
console.log(y instanceof SuperType);
console.log(y instanceof SubType);

console.log(Object.prototype.isPrototypeOf(y));
console.log(SuperType.prototype.isPrototypeOf(y));
console.log(SubType.prototype.isPrototypeOf(y));

// inherit from SuperType
SubType.prototype = new SuperType();

// new method
SubType.prototype.getSubValue = function(){
    return this.subproperty;
}

// override existing method
SubType.prototype.getSuperValue = function(){
    return false;
}

var instance = new SubType();
console.log(instance.getSubValue);
console.log(instance.getSuperValue);