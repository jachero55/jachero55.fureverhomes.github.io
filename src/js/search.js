class SearchPets {
  constructor(){
    console.log("Search Created!!!")
    this.ui = new Ui();
  }

  searchItems = async (searchItem)=> {
    // select input
    document.querySelector(".search-btn").addEventListener('click', async (e) => {
      e.preventDefault()
      const searchInput = document.querySelector("#search").value
      const searchString = searchInput.toLowerCase();
      const filteredItem = await searchItem.filter((searchResult) => {
        return searchResult.name.toLowerCase().includes(searchString);
    });
      this.ui.displayAvailableCats(filteredItem)
    //clear input after form submission
    document.querySelector("#search").value = ''
    }) 
  }
}