window.onload = () => {
  this.ui = new Ui();
  ui.displayCatDescription();
  ui.backToCatsBtn()
  ui.contactUsBtn()
  ui.smoothScroll()
  // ui.featuredImage()
}
class Ui {
 constructor() {
   console.log("Ui Created")
  this.itemStore = new ItemStorage()
  this.contactUsBtn()
  this.smoothScroll()
 }

 displayAvailableCats = async (catItems)=> {
   console.log("THOSE CATS", catItems)
  let filteredCats = catItems.filter(filteredCats => filteredCats.category==catItems.featured && filteredCats.other == catItems.other);
    let container_image = document.querySelector(".container-image");
    let results = '';
    await filteredCats.forEach(item => {
      results += `
          <div class="image-container">
              <img data-id=${item.id} src=${item.image} alt="cat"/>
              <div class="img-details">
                <h3>${item.name}</h3>
              </div>
          </div>
        `
        container_image.innerHTML = results;
    });
    this.getImagesClicked(filteredCats)
 }

 getImagesClicked = (item)=> {
   const catImages = [...document.querySelectorAll(".image-container img")];
   catImages.forEach((imgClicked)=>{
     imgClicked.addEventListener('click', async (e) => {
       e.preventDefault()
       console.log(e.target.dataset.id)

       const catId = e.target.dataset.id

       const ctId = await item.find(ctId => ctId.id == catId);

       this.itemStore.singleKitty(ctId)

       this.catDetails()
     })
   })
 }

 featuredImage = async(cat)=> {
  let filteredCategory = await cat.filter(filteredCat => filteredCat.category!=cat.featured);
  console.log("Featured cats",filteredCategory)
  let feature = document.querySelector(".featured-container")

  let result = '';
  filteredCategory.forEach((myCat) => {
    result += `
           <div class="image-container">
               <img class="featured-img" data-id=${myCat.id} src=${myCat.image} />
           <div class="img-details">
             <h3>${myCat.name}</h3>
           </div>
         </div>
       `
       feature.innerHTML = result;
  })
  this.featuredImagesClicked(cat)
}

// otherImage = async(cat)=> {
//   let filteredCategory = await cat.filter(filteredCat => filteredCat.other!=cat.other);
//   console.log("Featured cats",filteredCategory)
//   let feature = document.querySelector(".might-also-like-container")

//   let result = '';
//   filteredCategory.forEach((myCat) => {
//     result += `
//             <div class="image-container">
//             <img src=${myCat.image}/>
//             <div class="img-details">
//               <h3>${myCat.name}</h3>
//             </div>
//           </div>
//        `
//        feature.innerHTML = result;
//   })
//   this.otherImagesClicked(filteredCategory);
// }

// otherImagesClicked = (item)=> {
//   const catImages = [...document.querySelectorAll(".might-also-like-container img")];
//   catImages.forEach((imgClicked)=>{
//     imgClicked.addEventListener('click', async (e) => {
//       e.preventDefault()
//       console.log("bbbbbbb",e.target.dataset.id)

//       const catId = e.target.dataset.id

//       const ctId = await item.find(ctId => ctId.id == catId);

//       this.itemStore.singleKitty(ctId)

//       this.catDetails()
//     })
//   })
// }

 featuredImagesClicked = (item)=> {
  const catImages = [...document.querySelectorAll(".featured-container img")];
  catImages.forEach((imgClicked)=>{
    imgClicked.addEventListener('click', async (e) => {
      e.preventDefault()
      console.log("bbbbbbb",e.target.dataset.id)

      const catId = e.target.dataset.id

      const ctId = await item.find(ctId => ctId.id == catId);

      this.itemStore.singleKitty(ctId)

      this.catDetails()
    })
  })
}

 displayCatDescription = ()=> {
  let result = '';
  const singleItem = document.querySelector(".description")
  const getItems = JSON.parse(localStorage.getItem('singleKitty'))
  console.log("MMMMMMM", getItems)
  if(getItems) {
      result += `
      <article class="flex-basis-container">
          <div class="right-basis">
          <img src=${getItems.image} />
          </div>
          <div class="left-basis">
            <h2>${getItems.name}'s Details</h2>
            <p><span>Name</span>: ${getItems.name}</p>
            <p><span>Gender</span>: ${getItems.gender}</p>
            <p><span>Date of Birth</span>: ${getItems.birth}</p>
            <p><span>Date Available</span>: ${getItems.available}</p>
            <p><span>Current Weight</span>: ${getItems.weight}</p>
            <p><span>Color</span>: ${getItems.color}</p>
            <p><span>Kitty Id</span>: ${getItems.id}</p>
            <p>${getItems.description}</p>
            <button class="contactUs">Contact Us</button>
            <button class="back-btn">Back To Cats</button>
          </div>
      </article>
            `
            singleItem.getItem = true;
            singleItem.innerHTML = result;
            localStorage.removeItem(getItems)
  }
  
 }

 catDetails =()=> {
  window.location.href = "cat-details.html"
}

backToCatsBtn =()=> {
  document.querySelector(".back-btn").addEventListener('click', e => {
    window.location.href = "cats.html";
  })
}

contactUsBtn =()=> {
  let contact_btn = document.querySelectorAll(".contactUs");
  contact_btn.forEach((btn) => {
    btn.addEventListener('click', e => {
      console.log("AAAAAAZZZ")
      window.location.href = "contact.html";
    })
  })
}

  smoothScroll =()=> {
    let goTopBtn = document.querySelectorAll(".goTop")
    goTopBtn.forEach((btn)=> {
      btn.addEventListener('click', e => {
        console.log("ZZZZZZZZZ")
        window.scrollTo({top: 0, behavior: 'smooth'});
      })
    })
  }

  scrollBtn =()=> {
    if(pageOffset >= 1000)
      {
        let goTopBtn = document.querySelectorAll(".goTop")
        goTopBtn.forEach((btn) => {
          btn.style.visibility = "visible"
        })
      }else
      {
        let goTopBtn = document.querySelectorAll(".goTop")
        goTopBtn.forEach((btn) => {
          btn.style.visibility = "hidden"
        })
      }
  }
}