export const quadrado = (a: number[]) => {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i];
    }
    return a;
}
export const quadrado2 = (a: number[]) => {
    a.forEach((n, index, a) => {
        a[index] = n * n
    });
    return a;
}

console.log(quadrado([3,5,7,3,8,9,1]))
console.log(quadrado2([3,5,7,3,8,9,1]))