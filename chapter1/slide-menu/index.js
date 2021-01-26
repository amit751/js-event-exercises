const clickToOpen = document.getElementById("click-toopen");
const list = document.querySelector("ul");
const openA= document.getElementById("open-a");
const closedA= document.getElementById("closed-a");


clickToOpen.addEventListener("click", open);
clickToOpen.addEventListener("click", close);


function close(){
    
    clickToOpen.insertBefore(closedA, clickToOpen.firstChild);
    clickToOpen.removeEventListener("click", open);
    list.remove();
    openA.remove();
    clickToOpen.addEventListener("click", open);
    clickToOpen.removeEventListener("click", close);
    
    
}

function open(){

    
    
    document.body.append(list);
    closedA.remove();
    clickToOpen.insertBefore(openA, clickToOpen.firstChild);
    clickToOpen.addEventListener("click", close);

    
}

