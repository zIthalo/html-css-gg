const nav = document.querySelector(".nav")
const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")

function handleButtonClick(event){
    if(event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("active")
    handleClickOutside(menu, () =>{
        nav.classList.remove("active")
    })
}
btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick)

//pausei pois estava além da minha compreensão