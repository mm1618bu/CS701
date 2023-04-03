interface ICourse{
    name: string;
}

function displayCourse(course:ICourse){
    console.log(course.name);
}

let x = {id:'cs701', name:"RIA Development"};
displayCourse(x);

let y: ICourse = {name:"RIA Development"};
displayCourse(y);