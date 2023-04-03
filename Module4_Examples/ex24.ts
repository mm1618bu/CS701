interface ICourse {
    readonly id: string;
    name: string;
}

function displayCourse(course: ICourse): string{
    let result: string = 
    `${course.id} -- ${course.name}`;
    return result;
}

let x = {id: 'cs701', name: "RIA Development"};
console.log(displayCourse(x));

x.name = "Rich Internet Application Development";
console.log(displayCourse(x));

x.id = 'cs999';
console.log(displayCourse(x));