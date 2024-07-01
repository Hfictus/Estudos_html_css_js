
//Menu mobile
const clicarMenu = document.getElementById('menu-glass')
clicarMenu.addEventListener("click", clickMenu)
function clickMenu() {
    const menu = document.getElementById('items-menu-glass')
    const mainHeader = document.getElementById("main-header") ;
    if(menu.style.display == "block") {
        menu.style.display = "none";
        mainHeader.style.backgroundColor = "white";
        clicarMenu.style.opacity = .3;
    }else{
        menu.style.display = "block";
        mainHeader.style.backgroundColor = "rgb(125, 124, 124)";
        clicarMenu.style.opacity = 1;
    }
}

//Função para verificar a largura da tela e alterar a imagem
const updateImage = () => {
    const screenWidth = window.innerWidth;
    const imgGlass = document.getElementById("img-glass");
    if(screenWidth <= 600) {
        imgGlass.src = "img/glass-oculos-preto-peq.webp";
    }else {
        imgGlass.src = "img/glass-oculos-preto-peq2.webp";
    }
}       

// Verifique a largura da tela ao carregar a página
updateImage();

//Adicione um ouvinte de evento para verificar a largura da tela quando a janela for redimensionada
window.addEventListener("resize", updateImage);
