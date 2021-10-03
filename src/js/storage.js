class ItemStorage {
  constructor() {
    console.log("Storage created!!!")
  }

  storeAllKitty =(allKitty)=> {
    localStorage.setItem("allKitty", JSON.stringify(allKitty));
  }


   singleKitty =(items)=> {
    localStorage.setItem("singleKitty", JSON.stringify(items));
  }
}