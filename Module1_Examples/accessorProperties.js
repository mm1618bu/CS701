// Using Accessor Property

var project = {
	_year:2010,
	version: 1
};

Object.defineProperty(project, "year", {
	get: function( ){
		return this._year;
	},
	set: function(newValue){
	
		if (newValue > 2010) {
			this._year = newValue;
			this.version += (newValue - 2010);
		}
	}
});



console.log(project.year);	// 2010
console.log(project.version);	// 1

project.year = 2014;

console.log(project.year);	// 2014
console.log(project.version);	// 5


// Using defineProperties

var project = {};

Object.defineProperties(project, {
	_year: {
		writable: true,
		value: 2010
	},
	
	version: {
		writable: true,
		value: 1,
	},
	
	year: {
		get: function( ){
			return this._year;
		},
		
		set: function(newValue){
			if(newValue > 2010) {
			this.year = newValue;
			this.version += (newValue - 2010);
			}
		}
	}
});


console.log(project.year);	// 2010
console.log(project.version);	// 1

project.year = 2020;
console.log(project.year);	// 2020
console.log(project.version);	// 11