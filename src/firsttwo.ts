export const firstTwo = (a: any[]) => {
    const b = a.slice(0,2);
    return b;
}
console.log(firstTwo([2,4,6,2,8,9,5]))