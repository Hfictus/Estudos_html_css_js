
let clicarMenu = document.getElementById('menu-glass')
clicarMenu.addEventListener("click", clickMenu)

function clickMenu() {
    let menu = document.getElementById('items-menu-glass')
    
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        clicarMenu.style.opacity = .3
    }else{
        menu.style.display = 'block'
        clicarMenu.style.opacity = 1
    }
}
