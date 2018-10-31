let botoes = document.querySelectorAll(".botao");

function show_open_sistema(){
    window.scrollTo(0, 687);  
    console.log(window.pageXOffset);    
}

botoes[0].addEventListener("click", show_open_sistema);

window.addEventListener("scroll", function(){
    // console.log(window);
    console.log(window.pageYOffset);
});