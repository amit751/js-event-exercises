const clickToOpen = document.getElementById("click-toopen");
const list = document.querySelector("ul");
const openA= document.getElementById("open-a");
const closedA= document.getElementById("closed-a");


clickToOpen.addEventListener("click", open);
clickToOpen.addEventListener("click", close);


function close(){
    clickToOpen.appendChild(closedA);
    clickToOpen.removeEventListener("click", open);
    list.remove();
    openA.remove();
    clickToOpen.addEventListener("click", open);
    clickToOpen.removeEventListener("click", close);
    
    
}

function open(){

    clickToOpen.appendChild(openA);
    document.body.append(list);
    closedA.remove();
    clickToOpen.addEventListener("click", close);

    
}

