const nSelection = 20;
const arraySelection = [];

initselection();

function initselection() {
    for (let i = 0; i < nSelection; i++) {
        arraySelection[i] = Math.random();
    }
    showBars1();
}

function selectionPlay() {
    const copy = [...arraySelection];
    const swaps = selectionSort(copy);
    animate1(swaps);
}

function animate1(swaps) {
    if (swaps.length === 0) {
        return;
    }
    const [i, minIndex] = swaps.shift();
    [arraySelection[i], arraySelection[minIndex]] = [arraySelection[minIndex], arraySelection[i]];
    showBars1();
    setTimeout(function () {
        animate1(swaps);
    }, 100);
}

function selectionSort(array) {
    const swaps = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swaps.push([i, minIndex]);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return swaps;
}

function showBars1() {
    const container2 = document.getElementById("container1");
    container2.innerHTML = ""; // Clear the container
    for (let i = 0; i < nSelection; i++) {
        const bar1 = document.createElement("div");
        bar1.style.height = arraySelection[i] * 100 + "%";
        bar1.classList.add("bar1");
        container2.appendChild(bar1);
    }
}