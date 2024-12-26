const n2 = 20;
const arrayHeap = [];

initHeap();

function initHeap() {
    for (let i = 0; i < n2; i++) {
        arrayHeap[i] = Math.random();
    }
    showBarsHeap();
}

function heapPlay() {
    const copy = [...arrayHeap];
    const swaps = heapSort(copy);
    animateHeap(swaps);
}

function animateHeap(swaps) {
    if (swaps.length === 0) {
        return;
    }
    const [i, j] = swaps.shift();
    [arrayHeap[i], arrayHeap[j]] = [arrayHeap[j], arrayHeap[i]];
    showBarsHeap();
    setTimeout(function () {
        animateHeap(swaps);
    }, 100);
}

// Helper function to maintain the heap property
function heapify(arrayHeap, n, i, swaps) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arrayHeap[left] > arrayHeap[largest]) {
        largest = left;
    }

    if (right < n && arrayHeap[right] > arrayHeap[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swaps.push([i, largest]);
        [arrayHeap[i], arrayHeap[largest]] = [arrayHeap[largest], arrayHeap[i]]; // Swap
        heapify(arrayHeap, n, largest, swaps);
    }


}

// Heap Sort
function heapSort(arrayHeap) {
    const swaps = [];
    const n = arrayHeap.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arrayHeap, n, i, swaps);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end
        swaps.push([0, i]);
        [arrayHeap[0], arrayHeap[i]] = [arrayHeap[i], arrayHeap[0]];
        heapify(arrayHeap, i, 0, swaps); // Heapify the reduced heap
    }

    return swaps;
}

function showBarsHeap() {
    const containerHeap = document.getElementById("container-heap");
    containerHeap.innerHTML = "";
    for (let i = 0; i < n2; i++) {
        const barheap = document.createElement("div");
        barheap.style.height = arrayHeap[i] * 100 + "%";
        barheap.classList.add("barheap");
        containerHeap.appendChild(barheap);
    }
}
