export const math = (a, b, math) => {
    let result
    switch (math) {
        case '+':
            result = a + b
            break;
        case '-':
            result = a - b
            break;
        case '/':
            result = a / b
            break;
        case '*':
            result = a * b
            break
        default:
            break;
    }

    return `${a} ${math} ${b} = ${result}`
}