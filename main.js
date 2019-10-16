document.addEventListener('DOMContentLoaded', ()=>{
    const item = document.querySelectorAll('.open-info_content');
    item.forEach(elem=>{
        elem.addEventListener('click', ()=>{
            let hidden = elem.querySelector('.item-hidden');
            if(hidden.style.display == ""){
                closeItem();
                hidden.style.display = "block";
            } else hidden.style.display = "";
        });
    });
});
const openItem = document.querySelectorAll('.item-hidden');
function closeItem(){
    openItem.forEach(elem=>{
        elem.style.display = "";
    });
}
