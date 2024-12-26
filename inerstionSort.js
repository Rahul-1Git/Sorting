const numBars = 20;  // Array length
const insertionArray = [];  // Array for sorting

initialize();  // Initialize array and display bars

// Initializes the array with random values between 0 and 1
function initialize() {
    for (let i = 0; i < numBars; i++) {
        insertionArray[i] = Math.random();
    }
    displayBars(insertionArray);  // Display bars based on the initial array
}

// Start the sorting process
function startSorting() {
    const copy = [...insertionArray];  // Create a copy of the array to avoid modifying the original
    insertionSort(copy);  // Start Insertion Sort
}

// Insertion Sort algorithm with animation
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];  // Current value to be inserted
        let j = i - 1;

        // Find the correct position for currentElement in the sorted portion of the array
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];  // Shift larger elements to the right
            j--;
        }
        arr[j + 1] = currentElement;  // Insert the currentElement at the correct position

        // Animate the sorting step
        animateSorting(arr, i, j + 1);
    }
}

// Function to animate the array by updating the bars after each insertion
function animateSorting(arr, currentIndex, insertPosition) {
    displayBars(arr);  // Update the bars display

    // Highlight the current element being sorted (currentIndex) and the insert position
    const bars = document.querySelectorAll('.barInsertion');
    bars[currentIndex].style.backgroundColor = 'orange';  // Highlight current element in orange
    if (insertPosition !== currentIndex) {
        bars[insertPosition].style.backgroundColor = 'green';  // Highlight insert position in green
    }

    // Reset the colors after a delay
    setTimeout(() => {
        bars[currentIndex].style.backgroundColor = 'black';  // Reset current element color
        if (insertPosition !== currentIndex) {
            bars[insertPosition].style.backgroundColor = 'black';  // Reset insert position color
        }
    }, 500);
}

// Function to display the array as bars in the container
function displayBars(arr) {
    const container = document.getElementById("insertion-Container");
    container.innerHTML = "";  // Clear the container

    // Create a bar for each element in the array
    for (let i = 0; i < numBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = arr[i] * 100 + "%";  // Set height based on value
        bar.classList.add("barInsertion");
        container.appendChild(bar);
    }
}
