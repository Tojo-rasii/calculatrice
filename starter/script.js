document.addEventListener('DOMContentLoaded', function () {
    // Select the input field for the result
    var resultInput = document.querySelector('.result');


    // Select all calculator buttons
    var buttons = document.querySelectorAll('section article span');

    // Add click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the button text content
            var buttonText = button.textContent;

            // Check if the input is empty before performing certain actions
            if (['+', '-', '*', '%'].includes(buttonText) && resultInput.value.trim() === '') {
                resultInput.value = '';
                return;
            }

            // Handle different button actions
            switch (buttonText) {
                case 'C':
                    // Clear the result input
                    resultInput.value = '';
                    break;
                case '=':
                    // Check if the input is not empty before evaluating
                    if (resultInput.value.trim() === '') {
                        resultInput.value = '';
                        return;
                    }

                    // Evaluate and display the result
                    try {
                        resultInput.value = eval(resultInput.value);
                    } catch (error) {
                        resultInput.value = '';
                    }
                    break;
                case 'Del':
                    // Delete the last character
                    resultInput.value = resultInput.value.slice(0, -1);
                    break;
                default:
                    // Append the button text to the result input
                    resultInput.value += buttonText;
                    break;
            }

        });
    });
});