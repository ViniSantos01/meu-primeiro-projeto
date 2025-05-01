let body = document.querySelector("body");
let tenis = document.querySelector(".tenis")


function mudarcor(cor, imagem){
    tenis.classList.add("troca-efeito")

    document.body.style.background = cor;

     tenis.src = imagem
//contador de tempo
setTimeout(() => {
    tenis.classList.remove("troca-efeito")
}, 350);

     
}