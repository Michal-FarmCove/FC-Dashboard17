let selectedDay;
let selectedDate;
let selectedDayNumber;
let isCheckboxSelected = false; // To keep track of whether a checkbox is selected

// Function to select only one checkbox
function selectOnlyOne(checkbox, day, date, dayNumber) {
    const checkboxes = document.querySelectorAll('.row-checkbox');
    checkboxes.forEach((cb) => {
        cb.checked = false;
    });
    checkbox.checked = true;
    selectedDay = day;
    selectedDate = date;
    selectedDayNumber = dayNumber;
    isCheckboxSelected = true; // Set to true when a checkbox is selected
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('nextBtn').className = 'button1'; // Change class to button1
}

// Show the second table
function showTable2() {
    document.getElementById('table1-container').style.display = 'none';
    document.getElementById('table2-container').style.display = 'block';

    const header = document.getElementById('logging-header');
    header.innerText = `Logging - ${selectedDate} - Day ${selectedDayNumber}`;
}

// Go back to the first table
function showTable1() {
    document.getElementById('table2-container').style.display = 'none';
    document.getElementById('table1-container').style.display = 'block';

    // If a checkbox is still selected, ensure the "Next" button is enabled
    if (isCheckboxSelected) {
        document.getElementById('nextBtn').disabled = false;
        document.getElementById('nextBtn').className = 'button1'; // Change class to button1
    } else {
        document.getElementById('nextBtn').disabled = true; 
        document.getElementById('nextBtn').className = 'button2'; // Change class to button2 if no checkbox is selected
    }
}
