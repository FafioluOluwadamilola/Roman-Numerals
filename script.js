const input = document.getElementById('number');
const output = document.getElementById('output');
const convert = document.getElementById('convert-btn');

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}

function convertCondition() {
    const num = parseInt(input.value);
    if (num <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1.";
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else if (isNaN(num)) {
        output.textContent = "Please enter a valid number.";
    } else {
        const romans = convertToRoman(num);
        output.textContent = romans;
    }

    // ✨ Trigger fade-in animation
  output.classList.remove("show");      // reset animation
  void output.offsetWidth;              // force reflow
  output.classList.add("show");         // play animation
}

convert.addEventListener('click', convertCondition);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertCondition();
    }
});