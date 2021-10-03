class Menu {
  constructor() {
    console.log("Menu created")
    this.openMenu();
    this.closeMenu();
  }

  openMenu =()=>{
    let openMenuBtn = document.querySelector("#menu-icon")
    let closeMenuBtn = document.querySelector("#menu-close")
    let ulList = document.querySelector(".list ul");

    openMenuBtn.addEventListener('click', (e) => {
      openMenuBtn.style.display = "none"
      closeMenuBtn.style.display = "block"
      ulList.classList.add('show_menu')
      ulList.style.display = "block"
    })
  }

  closeMenu =()=>{
    let openMenuBtn = document.querySelector("#menu-icon")
    let closeMenuBtn = document.querySelector("#menu-close")
    let ulList = document.querySelector(".list ul");

    closeMenuBtn.addEventListener('click', (e) => {
      openMenuBtn.style.display = "block"
      closeMenuBtn.style.display = "none"
      ulList.classList.remove('show_menu')
      ulList.style.display = "none"
    })
  }
}