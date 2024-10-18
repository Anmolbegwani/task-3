document.getElementById('convert-btn').addEventListener('click', function() {
    const temperature = document.getElementById('temp-input').value;
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;
    const resultElement = document.getElementById('temp-output');
    const errorMessage = document.getElementById('error-message');

    // Input validation
    if (isNaN(temperature) || temperature === '') {
        alert("Please enter a valid number!");
        return;
    }

    let convertedTemp;
    const tempValue = parseFloat(temperature);

    // Conversion logic
    const conversions = {
        celsius: { fahrenheit: (tempValue * 9/5) + 32, kelvin: tempValue + 273.15 },
        fahrenheit: { celsius: (tempValue - 32) * 5/9, kelvin: (tempValue - 32) * 5/9 + 273.15 },
        kelvin: { celsius: tempValue - 273.15, fahrenheit: (tempValue - 273.15) * 9/5 + 32 }
    };

    if (inputUnit === outputUnit) {
        convertedTemp = tempValue;  // No conversion needed if same units
    } else {
        convertedTemp = conversions[inputUnit][outputUnit];
    }

    // Display the result
    resultElement.value = `${convertedTemp.toFixed(2)} °${outputUnit.charAt(0).toUpperCase()}`;
});
