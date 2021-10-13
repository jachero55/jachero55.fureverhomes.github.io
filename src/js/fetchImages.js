class FetchImages {
  constructor() {
    console.log("Fetch images created")
    this.getImages()
    this.ui = new Ui();
    this.storedItems = new ItemStorage();
    this.petSearch = new SearchPets()
  }
  
  getImages = async ()=> {
    try{
      let response = await fetch('https://raw.githubusercontent.com/jachero55/jachero55.fureverhomes.github.io/main/json/data.json?token=ALCZ77URBN2ZWGG3KLRWXKLBN63PO');
      let data = await response.json();
      let items = data.cats;
      this.storedItems.storeAllKitty(items);
      this.ui.displayAvailableCats(items)
      this.ui.featuredImage(items);
      this.petSearch.searchItems(items)
      // this.ui.otherImage(items);
      console.log(items)
    }catch (e) {
      console.log(e)
    }
  }

//   getBgImages = async ()=> {
//     try{
//       let response = await fetch("/src/data/data.json");
//       let data = await response.json();
//       let bgImages = data.backgroundImages;
//       this.ui.displayBgImages(bgImages)
//       console.log(bgImages)
//     }catch (e) {
//       console.log(e)
//     }
//   }
 }