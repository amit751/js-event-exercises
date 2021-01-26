const links = document.querySelectorAll("a");
for (const link of links) {
    link.addEventListener("click",leav);
    
}

function leav(event){
    event.preventDefult();
    alert("do you want to leav the page?");
    // event.preventDefult()=true;

}