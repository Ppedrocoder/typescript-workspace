export const Pairs = (a: number[]) => {
    const b = a.filter((e) => e%2 == 0 )
    return b
}

console.log(Pairs([8, 3, 9, 5, 6, 12]))