export function square(x: number): number{
    return Math.pow(x,2);
};

export function cube(x: number): number{
    return Math.pow(x,3);
};

export function random(a:number, b:number):number{
    let min = Math.ceil(a);
    let max = Math.floor(b);
    return min + Math.floor(Math.random() * (max - min));
}

export const PI = Math.PI;
export const E = Math.E;