"use strict"
function getResult(a,b,c){
    let x ='';
    let d = b**2 - 4 * a * c;
    if (d < 0) { 
        x=[];
      console.log(x);
   } else if (d == 0) {
       x = [(-b + Math.sqrt(d)) / (2*a)];
       console.log(x);
   } else if (d > 0) {
       x = [(-b + Math.sqrt(d)) / (2*a), (-b - Math.sqrt(d)) / (2*a)];
       console.log(x);
   };
  
     return x;
};

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length > 5) {
        averageMark = 'Производится расчет только из 5 оценок!';
        return averageMark;
        marks.splice(5);
    } else if (marks.length === 0) {
        return 0;
    }
    for ( let i = 0; i < marks.length; i++) {
        averageMark += marks[i];
    }
    return averageMark / marks.length;
}

function askDrink(name,dateOfBirthday) {
    let result = new Date().getFullYear(); 
    if (result - dateOfBirthday.getFullYear() > 18) {
        return `Не желаете ли олд-фэшн ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };
    
}