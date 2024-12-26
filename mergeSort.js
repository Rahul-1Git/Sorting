const n3 = 20; 
let arrayMerge = []; 

initMerge();

function initMerge() {
    for (let i = 0; i < n3; i++) {
        arrayMerge[i] = Math.random();
    }
    showBarsMerge();  
}

function mergePlay() {
    const copy = [...arrayMerge];                                                                  
    const swaps = mergeSortIterative(copy);
    animateMerge(swaps); 
}

function animateMerge(swaps) {
    if (swaps.length === 0) {
        return;
    }

    const [start, end, mergedArray] = swaps.shift();
    arrayMerge = [...mergedArray]; 

    showBarsMerge(start, end); 
    setTimeout(function () {
        animateMerge(swaps); 
    }, 500); 

}

function mergeSortIterative(array) {
    const swaps = [];  

    let width = 1;
    while (width < array.length) {
        for (let i = 0; i < array.length; i += width * 2) {
            const left = array.slice(i, i + width);
            const right = array.slice(i + width, i + width * 2);

            let leftIdx = 0, rightIdx = 0, mergeIdx = i;
            const tempArray = [];

            // Merge two sorted arrays
            while (leftIdx < left.length && rightIdx < right.length) {
                if (left[leftIdx] < right[rightIdx]) {
                    tempArray.push(left[leftIdx++]);
                } else {
                    tempArray.push(right[rightIdx++]);
                }
            }

            // Handle remaining elements in left or right
            while (leftIdx < left.length) {
                tempArray.push(left[leftIdx++]);
            }

            while (rightIdx < right.length) {
                tempArray.push(right[rightIdx++]);
            }

            // Merge back the temp array into the original array
            for (let j = 0; j < tempArray.length; j++) {
                array[mergeIdx + j] = tempArray[j];
            }

            // Record the range that was merged and the updated array
            swaps.push([i, i + tempArray.length - 1, [...array]]);
        }

        width *= 2;  // Double the width for the next iteration
    }

    return swaps;
}


function showBarsMerge(start = 0, end = n) {
    const containerMerge = document.getElementById("container-merge");
    containerMerge.innerHTML = "";  
    const barMerge = document.createElement("div");
    for (let i = 0; i < n3; i++) {
        const barMerge = document.createElement("div");
        barMerge.style.height = arrayMerge[i] * 100 + "%"; 
        barMerge.classList.add("barMerge");

          if (i >= start && i <= end) {
            barMerge.classList.add("highlight");
        } else {
            barMerge.classList.remove("highlight"); 
        }

        containerMerge.appendChild(barMerge);
    }

}
