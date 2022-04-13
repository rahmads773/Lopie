// full screen navbar
let full = document.querySelector(".full");
let menuIcon = document.querySelector(".menu_icon");
let span1 = document.querySelector("header .menu .menu_icon span:nth-child(1)");
let span2 = document.querySelector("header .menu .menu_icon span:nth-child(2)");
let span3 = document.querySelector("header .menu .menu_icon span:nth-child(3)");

// active full
const a_full = () => {
    full.classList.toggle("active-full");
    span2.classList.toggle("span2");
    span1.classList.toggle("span1");
    span3.classList.toggle("span3");
    menuIcon.classList.toggle("height")
}

// remove full function
const re_full = () => {
    full.classList.remove("active-full");
    span2.classList.remove("span2");
    span1.classList.remove("span1");
    span3.classList.remove("span3");
    menuIcon.style.height = "16px";
    menuIcon.classList.remove("active_icon");
}

menuIcon.addEventListener("click", () => {
    // if (full.classList.contains("active-full")) {
    //     menuIcon.style.height = "16px";
    //     console.log("true")
    // }
  a_full()
  fullScreen();
});

full.addEventListener("click", (eo) => {
re_full()
});

function fullScreen() {
  full.innerHTML = ` <ul>
    <li><a href="#header">Home</a></li>
    <li> <a href="#arrival"> New arrival</a></li>
    <li><a href="#accessories"> accessories</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>`;
}

// auto writing
let span = document.querySelector(".landing .text h1 span ");
let i = 0;
let j = 1;
function auto() {
  const newH = "Hommie!";
  span.innerHTML += newH.slice(i, j);
  i++;
  j++;
  if (i > newH.length) {
    span.innerHTML = "";
    i = 0;
    j = 1;
  }
}

let Si = setInterval(auto, 300);

//   shop list

let shop_con = document.querySelector(".shop-container");
let shop_list = document.querySelector(".shop-list");
let landing = document.querySelector(".landing");
shop_con.addEventListener("mouseover", (eo) => {
  shop_list.classList.add("active-list");
  landing.style.zIndex = "-1";
});
shop_con.addEventListener("mouseout", (eo) => {
  shop_list.classList.remove("active-list");
  landing.style.zIndex = "1";
});

// slider show
let next = document.querySelector(".right");
let pre = document.querySelector(".left");
let box_container = document.querySelector(".boxes");

let boxes_zero = `  <div class="box">
<div class="over-lay">
<input type="submit" value="Buy" class="buy">
</div>
<div class="image">
    <img src="img/headphones.svg" alt="hp">
</div>
<div class="text">
<h3>HeadPhones</h3>
<p>70$</p>
</div>
</div>
<div class="box">
<div class="over-lay">
    <input type="submit" value="Buy" class="buy">
                    </div>
<div class="image">
    <img src="img/airpods.svg" alt="ap">
</div>
<div class="text">
    <h3>Air Pods</h3>
    <p>90$</p>
</div>
 </div>
 <div class="box">
    <div class="over-lay">
        <input type="submit" value="Buy" class="buy">
                        </div>
     <div class="image">
        <img src="img/mouse.svg" alt="m">
     </div>
    <div class="text">
        <h3>Mouse</h3>
        <p>50$</p>
    </div>
     </div>`;
let boxes_one = `
<div class="box">
<div class="over-lay">
    <input type="submit" value="Buy" class="buy">
                    </div>
 <div class="image">
    <img src="img/mouse.svg" alt="m">
 </div>
<div class="text">
    <h3>Mouse</h3>
    <p>50$</p>
</div>
 </div>
 <div class="box">
 <div class="over-lay">
     <input type="submit" value="Buy" class="buy">
                     </div>
 <div class="image">
     <img src="img/airpods.svg" alt="ap">
 </div>
 <div class="text">
     <h3>Air Pods</h3>
     <p>90$</p>
 </div>
  </div>
  <div class="box">
  <div class="over-lay">
<input type="submit" value="Buy" class="buy">
  </div>
  <div class="image">
      <img src="img/headphones.svg" alt="hp">
  </div>
<div class="text">
 <h3>HeadPhones</h3>
 <p>70$</p>
</div>
</div>`;

let boxes_two = `
<div class="box">
<div class="over-lay">
    <input type="submit" value="Buy" class="buy">
                    </div>
<div class="image">
    <img src="img/airpods.svg" alt="ap">
</div>
<div class="text">
    <h3>Air Pods</h3>
    <p>90$</p>
</div>
 </div>
 <div class="box">
 <div class="over-lay">
<input type="submit" value="Buy" class="buy">
 </div>
 <div class="image">
     <img src="img/headphones.svg" alt="hp">
 </div>
<div class="text">
<h3>HeadPhones</h3>
<p>70$</p>
</div>
</div>
<div class="box">
<div class="over-lay">
    <input type="submit" value="Buy" class="buy">
                    </div>
 <div class="image">
    <img src="img/mouse.svg" alt="m">
 </div>
<div class="text">
    <h3>Mouse</h3>
    <p>50$</p>
</div>
 </div>
`;

let index = 0;
let array_box = [boxes_zero, boxes_one, boxes_two];
next.addEventListener("click", (eo) => {
  pre.removeAttribute("disabled");
  pre.style.cursor = "pointer";
  pre.style.opacity = "1";
  if (index < array_box.length - 1) {
    box_container.innerHTML = array_box[index + 1];
    index++;
    console.log(index);
    if (index === array_box.length - 1) {
      console.log("disabled");
      next.setAttribute("disabled", "");
      next.style.cursor = "not-allowed";
      next.style.opacity = "0.5";
    }
  }
});

if (index === 0) {
  console.log("disabled");
  pre.setAttribute("disabled", "");
  pre.style.cursor = "not-allowed";
  pre.style.opacity = "0.5";
}
pre.addEventListener("click", (eo) => {
  next.removeAttribute("disabled");
  next.style.cursor = "pointer";
  next.style.opacity = "1";
  if (index > 0) {
    console.log(index);
    box_container.innerHTML = array_box[index - 1];
    index--;
    if (index === 0) {
      console.log("disabled");
      pre.setAttribute("disabled", "");
      pre.style.cursor = "not-allowed";
      pre.style.opacity = "0.5";
    }
  }
});

// adding an element when clicking on buy

let buttons = document.querySelectorAll(".buy");
// console.log(buttons)
let n_shop = document.querySelector(".num-shop");
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    let title =
      ele.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
    let price =
      ele.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML;
    let image =
      ele.parentElement.parentElement.getElementsByTagName("img")[0].src;
    let list = ` <div class="list">
        <img src ="${image}" width="50" height="50">
        <div class="text">
            <h3>${title}</h3>
            <p>${price}</p>
        </div>
    </div>`;
    shop_list.innerHTML += list;
    let number = +n_shop.innerHTML;
    number++;
    n_shop.innerHTML = number;
    //  console.log(number)
    ele.value = `Thank you!😊`;
    setTimeout(() => {
      ele.value = `Buy`;
    }, 2000);
  });
});

// animation on scroll
let header = document.querySelector("header .container");
let landing_text = document.querySelector(".landing .text");
let landing_image = document.querySelector(".landing .image");
let contact = document.querySelector(".contact");
let img_contact = document.querySelector(".contact .image img");
let title_contact = document.querySelector(".contact .form h2");
let inputs = document.querySelectorAll(".contact .form form input");
let btn_arr = [next, pre];

let scroll = document.querySelector(".scroll-top");
let arr1 = [header, landing_text];
window.onload = (eo) => {
  arr1.forEach((item) => {
    item.style.transform = "translateY(0)";
    item.style.opacity = "1";
  });
  landing_image.style.opacity = "1";
};

let arrival = document.querySelector(".arriaval");
let accessories = document.querySelector(".accessories");
let arr_boxes = document.querySelectorAll(".arriaval .box");
let main_title = document.querySelectorAll(".main-title");
window.onscroll = () => {
  if (window.scrollY >= arrival.offsetTop - 500) {
    main_title[0].style.transform = "translateY(0)";
    main_title[0].style.opacity = "1";
  }
  if (window.scrollY >= accessories.offsetTop - 600) {
    main_title[1].style.transform = "translateY(0)";
    main_title[1].style.opacity = "1";
  }
  arr_boxes.forEach((ele, index) => {
    if (window.scrollY >= ele.offsetTop + 100) {
      ele.style.opacity = "1";
      ele.style.transform = "translateY(0)";
    }
  });

  if (window.scrollY >= contact.offsetTop - 400) {
    img_contact.style.transform = "translateY(0)";
    img_contact.style.opacity = "1";
    title_contact.style.transform = "translateY(0)";
    title_contact.style.opacity = "1";
  }

  inputs.forEach((ele) => {
    if (window.scrollY >= ele.offsetTop - 700) {
      ele.style.opacity = "1";
      ele.style.transform = "translateX(0)";
    }
  });

  btn_arr.forEach((ele) => {
    if (window.scrollY >= accessories.offsetTop - 400) {
      ele.style.transform = "translateY(0)";
    }
  });
  // scroll to top arrow
  if (window.scrollY >= 800) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
};
