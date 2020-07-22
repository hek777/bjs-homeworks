function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    
    sleep(100); 
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => arr2[index] === item);
}

console.log(compareArrays([8, 9], [6])); 
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); 
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([8, 1, 2], [8, 1, 2])); 

function memorize(fn, limit) {
    let memory = [];

    return (...args) => {
      
        const arr = Array.from(args);
        const item = memory.find((item) => compareArrays(item.args, arr));
        if (item !== undefined) {
            
            return item.result;
        } else {
            
            if (memory.length >= limit) {
                memory.shift();
            }
            const result = fn(...args);
            memory.push({
                args: arr,
                result: result
            });
            return result;
        }

    }
}

console.log(mSum(3, 4)); // 7
console.log(mSum(8, 9, 5, 4)); // 26
console.log(mSum(9, 2, 4)); // 15
console.log(mSum(1, 2, 3)); // 6
console.log(mSum(1, 2, 3)); // 6
console.log(mSum(3)); // 3
console.log(mSum(3)); // 5
console.log(mSum(5)); // 5 