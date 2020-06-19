// Задание 1
function getSolutions(a, b , c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let result = {
        D: d,
        roots: []
    };
    if (d == 0) {
        let x1 = -b / 2*a;
        result = {
            D: d,
            roots: [x1]
        };
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2*a);
        let x2 = (-b - Math.sqrt(d)) / (2*a);
        result = {
            D: d,
            roots: [x1, x2]
        }
    }
    return result;
}
function showSolutionsMessage( a, b, c ) {
    result = getSolutions(a, b , c);
    console.log(`Вычисляем кори квадратного уравнение ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравниение имеет один корень X1 = ${result.roots[0]}`)
    }else if (result.D > 0) {
        console.log(`Уравнеине имеет два корня X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`)
    }
};

showSolutionsMessage(1, -8, 12);
showSolutionsMessage(5, 3, 7);
showSolutionsMessage(1, -6, 9);
// Задание 2
function getAverageScore(data) {

    function getAverageMark(marks) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++){
            sum += marks[i];
        }
        return sum / marks.length;
    }  

    let result = {};
    let averageMarks = [];
    for (let prop in data) {
        let average = getAverageMark(data[prop]);
        result[prop] = average;
        averageMarks.push(average);
    }
    result.average = getAverageMark(averageMarks);
    return result;
}

console.log(getAverageScore({
    algebra: [2,3,4,5,5,5,3,4],
    geometry: [4,5,3,4,4,5,3,3],
    russian: [3,4,5,5,4,4],
    physics: [4,4,4,5,5,5],
    music: [3,3,3,3,3],
    english: [3,4,3,4,3],
    poetry: [3,3,],
    chemistry: [5,5,5],
    french: [5,5,5,5,5]
}));

// задание 3
function getPersonData(secretData) {
    
    let result = new Object;
    for (let i in secretData) {
      if (i =="aaa") {
        result.firstName = getDecodedValue(secretData[i]);
      } else if (i =="bbb") {
        result.lastName = getDecodedValue(secretData[i]);
      }
    }
    console.log(result);
};


function getDecodedValue(secret) {
    if (secret == 0) {
        name = "Родриго";
      } else if (secret == 1) {
        name = "Эмильо";
      }
      return name;
};

secretData = {
    aaa: 1,
    bbb: 1
};
getPersonData(secretData);


