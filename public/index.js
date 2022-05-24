import { addListener } from "nodemon";

const dato = document.getElementById('input').value


function subir(params) {   
    fetch("/test", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}
    }).then(res =>{
        window.location.href = "http://localhost:1001/query"; 
    })
}