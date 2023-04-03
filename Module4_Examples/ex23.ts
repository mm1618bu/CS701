interface ICourse{
    id?: string;
    name: string;
}

function displayCourse(course: ICourse):string{
    let result: string = course.name;
    if(course.id) {
        result = `${course.id} -- ${course.name}`;
    }
    return result;
}

let x: ICourse = {id:'cs701', name: "RIA Development"};
console.log(displayCourse(x));

let y: ICourse = {name: "RIA Development"};
console.log(displayCourse(y));