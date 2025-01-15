
document.addEventListener('DOMContentLoaded', () => {
    // Count from 1, since default input already present.
    let inputCount = 1;

    // Function to add a new input field if requested button is clicked
    document.getElementById('addinput').addEventListener('click', () => {
        // Construct a new input type 
        const newInput = document.createElement('input');
        newInput.type = 'number';

        // Increment the ID for every new input box 
        newInput.id = `input${inputCount}`;
        newInput.placeholder = 'Enter grade';

        // Only accept values from 1-6
        newInput.min = 1;
        newInput.max = 6;
        document.getElementById('inputsContainer').appendChild(newInput);

        // Increment the input count for the next input
        inputCount++;
    });

    // Submit function to calculate and print array information
    document.getElementById('gradeForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create empty array
        const grades = [];
        for (let i = 0; i < inputCount; i++) {
            const inputValue = document.getElementById(`input${i}`);
            if (inputValue) {
                const value = parseFloat(inputValue.value);
                if (!isNaN(value)) {
                    grades.push(value);
                }
            }
        }

        // Calculate length and average
        const length = grades.length;
        const average = length > 0 ? (grades.reduce((sum, grade) => sum + grade, 0) / length).toFixed(2) : 0;

        // Render results in the outputContainer
        const outputContainer = document.getElementById('outputContainer');
        outputContainer.innerHTML = `Number of entered grades: ${length}<br>Average grade: ${average}`;

        console.log(grades); // Print the array of grades to the console
    });
});
        