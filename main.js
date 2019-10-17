document.addEventListener('DOMContentLoaded', ()=>{
    const item = document.querySelectorAll('.open-info_content');
    item.forEach(elem=>{
        elem.addEventListener('click', ()=>{
           
            if(elem.classList.contains('open-info_content-active')){
                elem.classList.toggle('open-info_content-active');

            } else {
                closeItem();
                elem.classList.toggle('open-info_content-active');
            }
        });
    });

    const openItem = document.querySelectorAll('.item-hidden');

    function closeItem(){
        openItem.forEach(elem=>{
            elem.style.display = "";
        });

        item.forEach(elem=>{
            elem.classList.remove("open-info_content-active");
        });
    }
});


