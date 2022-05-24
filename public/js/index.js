const section = document.querySelectorAll("section");

section.forEach(element => {
    element.addEventListener("click", () =>{
        element.classList.toggle('color')
    })
});