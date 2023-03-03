export const isFibonacci = num => {
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}
  
export  function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }
  