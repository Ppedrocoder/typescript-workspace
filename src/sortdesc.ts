export const sortDesc = (a: string[]): string[] => {
    const b = a.sort((a, b) => b.localeCompare(a))
    return b;
}

console.log(sortDesc(['carro', 'boneco', 'ave', 'lapis']));