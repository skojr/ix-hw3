// This is Samuel's function

let a = 0, b = 1, third;
function fibonacci(iter) {
    for (let i = 1; i <= iter; i++) {
    console.log(a);
    third = a + b;
    a = b;
    b = third;
    }
}

fibonacci(10);

//this code waas cread by Giovanni Smith.

function fibnum(){
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum)
    console.log(secondNum)
    for(i = 0; i< 8; i++){
        newNum = firstNum + secondNum;
        console.log(newNum)
        firstNum = secondNum;
        secondNum = newNum
    }
}