const nq = 20;   
const arraySort = [];  

initQuick();  


function initQuick() {
    for (let i = 0; i < nq; i++) {
        arraySort[i] = Math.random();
    }
    showBarsQuick(arraySort);  
}


function playQuick() {
    const copy = [...arraySort];  
    quickSort(copy, 0, copy.length - 1); 
}


function quickSort(arraySort, low, high) {
    if (low < high) {
        const pi = partition(arraySort, low, high); 

        animateQuick(arraySort, low, high, pi);

        setTimeout(() => {
            quickSort(arraySort, low, pi - 1); 
            quickSort(arraySort, pi + 1, high); 
        }, 500); 
    }
}


function partition(arraySort, low, high) {
    const pivot = arraySort[high];  
    let i = low - 1;

   
    for (let j = low; j < high; j++) {
        if (arraySort[j] < pivot) {
            i++;
            [arraySort[i], arraySort[j]] = [arraySort[j], arraySort[i]];  
        }
    }
    
    [arraySort[i + 1], arraySort[high]] = [arraySort[high], arraySort[i + 1]];

    return i + 1; 
}

function animateQuick(arraySort, low, high, pi) {
    showBarsQuick(arraySort);  

    
    const bars = document.querySelectorAll('.barQuick');
     bars[pi].style.backgroundColor = 'orange';  
    setTimeout(() => {
        bars[pi].style.backgroundColor = 'black';  
    }, 500);
}

function showBarsQuick(arraySort) {
    const containerQuick = document.getElementById("container-Quick");
    containerQuick.innerHTML = "";  

    for (let i = 0; i < nq; i++) {
        const barQuick = document.createElement("div");
        barQuick.style.height = arraySort[i] * 100 + "%"; 
        barQuick.classList.add("barQuick");
        containerQuick.appendChild(barQuick);
    }
}
