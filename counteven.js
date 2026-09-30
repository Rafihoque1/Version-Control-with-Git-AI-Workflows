let numbers = [10, 15, 22, 31, 40, 55, 68, 73];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
console.log(count);
