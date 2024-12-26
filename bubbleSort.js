
const n = 20;
const array = [];

init();

function init(){
    for(let i=0;i<n;i++)
    {
       array[i] = Math.random();
    }

    showBars();
}

function play(){
   const copy = [...array];
   const swaps =  bubbleSort(copy);
    animate(swaps);
    
}

function animate(swaps){
    if(swaps.lenth == 0){
        return;
    }
    const [i,j] = swaps.shift();
    [array[i],array[j]] = [array[j],array[i]];
    showBars();
    setTimeout(function(){
        animate(swaps);
    },100);
}


// sorting alogrithm
function bubbleSort(array){
    const swaps = [];
    do{
        var swapped = false;
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
                  swapped = true;
                  swaps.push([i-1,i]);
                  [array[i-1],array[i]] = [array[i],array[i-1]];
            }
            
        }
    }while(swapped);
 
   return swaps;
}



// styling the array bar
function showBars(){
    container.innerHTML = " ";
    document.querySelectorAll(".container").innerHTML=" ";
    for(let i=0;i<n;i++){
        const bar = document.createElement("div");
        bar.style.height = array[i]*100 + "%";
        bar.classList.add("bar");
        document.getElementById("container").appendChild(bar);
    }
}




