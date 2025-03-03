const inputNumber = document.getElementById("number");
const output = document.getElementById("output");
const convert = document.getElementById("convert-btn");

const romanNumbers =  ["M" ,"CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const arabicNumbers = [1000,900 ,500,400 ,100 ,90 , 50, 40 , 10, 9  , 5 , 4  ,1];

function findCloseNumber(number) {
    let start = 0;
    let end = arabicNumbers.length - 1;
    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(number > arabicNumbers[mid]) {
            end = mid - 1;
        }
        else if(number < arabicNumbers[mid]) {
            start = mid + 1;
        }
        else {
            return mid;
        }
    }
    return start;
}
function romanNumber(number) {
    let result = "";
    let romans = [];
    while(number > 0) {
        let idx = findCloseNumber(number);
        romans.push(romanNumbers[idx]);
        number -= arabicNumbers[idx];
    }
    for(let elem of romans) {
        result += elem;
    }
    return result;
}

convert.addEventListener("click", () => {
    if(inputNumber.value === "") {
        output.textContent = "Please enter a valid number."
        output.classList.remove("hidden");
    }
    if(Number(inputNumber.value) <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1."
        output.classList.remove("hidden");
    }
    if(Number(inputNumber.value) > 3999) {
        output.style.cssText = "color: red; border-color: red"
        output.textContent = "Please enter a number less than or equal to 3999."
        output.classList.remove("hidden");
    }
});