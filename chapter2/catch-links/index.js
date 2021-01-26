const links = document.querySelectorAll("a");
for (const link of links) {
    link.addEventListener("click",leav);
    
}

function leav(event){
    // event.preventDefult();
    let is = confirm ("do you want to leav the page?");
    if(!is){
    event.preventDefult();
    }
    // event.preventDefult()=true;

}