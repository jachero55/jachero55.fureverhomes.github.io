class Modal {
  constructor() {
    console.log("Modal Created")
    this.openModal();
    this.closeModal()
  }

  openModal =()=>{
    document.querySelector(".learnMore").addEventListener('click', e => {
      document.querySelector("#delivery-overlay").style.display = "block";
      document.querySelector(".modal-container").style.display = "block"
      console.log("MY MODAL")
    })
  }

  closeModal =()=>{
    document.querySelector(".close-modal").addEventListener('click', e => {
      document.querySelector("#delivery-overlay").style.display = "none"
    })
  }
}