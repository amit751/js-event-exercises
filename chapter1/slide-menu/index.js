const clickToOpen = document.getElementById("click-toopen");
const list = document.querySelector("ul");
clickToOpen.addEventListener("click", open);
clickToOpen.addEventListener("click", close);
let status =0;
function close(){
    if(!status){
    list.remove();
    status=1;
    }
}

function open(){
    if(status){
    document.body.append(list);
    status=0;
    }
}

