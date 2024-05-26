function clickMenu() {
    let menu = document.getElementById('items-menu-glass')
    let imgGlass = document.getElementById('menu-glass')
    
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        imgGlass.style.opacity = .3
    }else{
        menu.style.display = 'block'
        imgGlass.style.opacity = 1
    }
}
