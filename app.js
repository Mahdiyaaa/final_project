
// Dynamically add food item
const foods = [
    {
      type: "burger",
      category: "Burger ",
      image:
        "https://external-preview.redd.it/gZ8Iok4L5lGEcYujBBHDoM_2a_WT1-VE8jNRHxSHmic.jpg?auto=webp&s=949c6b204a5485e43fb795fcb2a90c79b40e074f",
      title: "Cheeseburger",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
      CartButton: "Add To Cart",
      id: 1,
    },
  
    {
      type: "coffee",
      category: "Coffee",
      image:
        "https://cdn.buttercms.com/AB7ud4YSE6nmOX0iGlgA",
      title: "Americano",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
      CartButton: "Add To Cart",
      id: 2,
    },
  
    {
      type: "coffee",
      category: "Coffee ",
      image:
        "https://www.roastycoffee.com/wp-content/uploads/photo-1514432324607-a09d9b4aefdd-735x1103.jpeg",
      title: "Espresso",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
      CartButton: "Add To Cart",
      id: 4,
    },
    {
      type: "burger",
      category: "Burger ",
      image:
        "https://www.seriouseats.com/thmb/z2Rjgx0vEGVbVj5SDeFIiaZ0HRo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-JUICYBROILEDBURGERS-JANJIGIAN-seriouseats-4-7883fb226a0c49e98aa0df4c31ca7ee1.jpg",
      title: "Broiled burgers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
      CartButton: "Add To Cart",
      id: 5,
    }
  ];

  // function for showing food 
  
  function showFood(food) {
    return ` <div class="item col-md-6 col-lg-4 p-3" data-category="coffee">
    <div class="card">
      <div class="img-container">
        <img src="${food.image}" alt="Coffee" />
        <span class="category-pill">${food.category}</span>
      </div>
      <div class="card-body">
        <h5 class="card-title">${food.title}</h5>
        <p class="card-text">${food.description}</p>
    
    
        <button class="addToCartBtn btn w-100">${food.CartButton}</button>
      </div>
    </div>
    </div>
    `;
  }

  // Select all the required DOM elements

  var allfoods = document.querySelector("#iits-items");
  var searchFrom = document.querySelector("#searchForm");
  var searchValue = document.querySelector("#iits-searchBox");
  var carttext = document.getElementById("iits-cart_counter");
  var decrementBtn = document.getElementById("cart_dec");
  const allToggleBtn = document.getElementById("all_toggle");
  const coffeeToggleBtn = document.getElementById("coffee_toggle");
  const burgerToggleBtn = document.getElementById("burger_toggle");
  var adminBtn = document.getElementById("iits-adminBtn");
  var additemform = document.getElementById("iits-adminSection");
  var cancelBtn = document.getElementById("iits-cancelBtn");
  const addNewItemForm = document.getElementById("iits-addNewForm");
  const title = document.querySelector("#name");
  const image = document.querySelector("#pic");
  const description = document.querySelector("#desc");
  const type = document.querySelector("#typeItem");
  const developerName = document.getElementById('iits-developer');
  let searchValueLocal = "";


  // Render all item for Dom and also use for Both search and filter 
  
  function renderfoods(elements) {
    allfoods.innerHTML = "";
    elements.map(function (food) {
      if (food.title.toLowerCase().includes(searchValueLocal.toLowerCase())) {  
        allfoods.innerHTML += showFood(food);
      }
    });
    if (allfoods.innerHTML == "")
      allfoods.innerHTML = `<span class="bg-danger text-white py-2 rounded">Nothing Found</span>`;

    //increment cart text after clicking "Add to cart" button 


    let addToCart = document.querySelectorAll(".addToCartBtn");


    addToCart.forEach(function (btn) {
      btn.addEventListener("click", function () {
        carttext.textContent = parseInt(carttext.textContent) + 1;

        
      });
    });
  }
  

  // Search functionality  
  
  searchFrom.addEventListener("submit", function (e) {
    e.preventDefault();
    searchValueLocal = searchValue.value;
    const updatedData = foods.filter((item) =>
      item.title.toLowerCase().includes(searchValueLocal) 
    );
  
    renderfoods(updatedData);
  });
  
  // initial rendering call

  renderfoods(foods);
  
  // Add click event to the filter radio buttons

  allToggleBtn.addEventListener("click", Toggle);
  coffeeToggleBtn.addEventListener("click", Toggle);
  burgerToggleBtn.addEventListener("click", Toggle);
  
  // Function for filtering

  function Toggle(e) {
    const selectedCategory = e.target.value;
  
    console.log(selectedCategory);
  
    let filteredItems = [];
  
    if (selectedCategory === "all") {
      filteredItems = [...foods];
    } else {
      filteredItems = foods.filter(function (item) {
        return item.type === selectedCategory;
      });
    }
  
    renderfoods(filteredItems);
  }
  
 

  // Decrement Cart Text when press Minius button
  
  decrementBtn.addEventListener("click", function () {
    if (parseInt(carttext.textContent) > 0) {                   // Cart Counter always be less than Zero 
      carttext.textContent = parseInt(carttext.textContent) - 1;

    }
  });
  

  // Function for hiddig admin form

    function hideForm() {
    additemform.style.display = "none";
  }

  // Initailly admin form will be hidden 
  
  hideForm();


// Add event to the admin button 

  adminBtn.addEventListener("click", formhandling);
  
  function formhandling() {
    var enteredUsername = prompt("Enter Your Username : "); 
    var enteredPassword = prompt("Enter Your Password : ");
  
    var correctUsername = "iits";
    var correctpassword = "23";
  
    if (
      enteredUsername == correctUsername && // checking with given value
      enteredPassword == correctpassword
    ) {
      additemform.style.display = "block";    // If correct then admin form will be shown 
    } else {
      alert("Wrong Credentials"); // IF not correct then Showing Alert 
    }
  }

 // add event in close button

  cancelBtn.addEventListener("click", function () {
    additemform.style.display = "none";  
  });
  
// Add event in the admin form submit button 

  addNewItemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addNewItem();
  });

  // Function for add New Item [Instruction 9]
   
  function addNewItem ()
  {
   


    let lastObj = foods[foods.length - 1];
    let lastId = 0;
    if (lastObj != undefined) {
      let lastId = lastObj.id;
    }

  // form value will be store in newObj

    let newObj = {
      type: type.value,
      category: type.value,
      image: image.value,
      title: title.value,
      description: description.value,
      id: lastId + 1,
      CartButton: "Add to Cart",
    };
  
    
  
    if (                       // check every feild is fill up or not , if not then showing alert
      type.value === "" ||
      image.value === "" ||
      title.value === "" ||
      description.value === ""
    ) {
      alert(" Please Fill Up Every Feilds");
    }

    else {
      foods.push(newObj);  //push to the main array
      renderfoods(foods);
      addNewItemForm.reset();  // clear form after submiting
      newObj = "";
    }
  }



  // Add My Name 

  developerName.textContent = 'Sumaiya Mahdiya Mahia';