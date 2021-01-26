const clickToOpen = document.getElementById("click-toopen");
const list = document.querySelector("ul");
// clickToOpen.addEventListener("click", close);
clickToOpen.addEventListener("click", open);
clickToOpen.addEventListener("click", close);

function close(){
    clickToOpen.removeEventListener("click", open);
    list.remove();
    clickToOpen.addEventListener("click", open);
    clickToOpen.removeEventListener("click", close);
    
    
}

function open(){
   
    document.body.append(list);
    clickToOpen.addEventListener("click", close);

    
}

