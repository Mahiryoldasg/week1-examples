const productList = [
  {
    id: 1,
    name: 'Kola',
    price: 4,
    img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg',
  },
  {
    id: 2,
    name: 'Iskender',
    price: 30,
    img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg',
  },
  {
    id: 3,
    name: 'Yat',
    price: 450000,
    img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg',
  },
  {
    id: 4,
    name: 'Bahceli Ev',
    price: 9500000,
    img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg',
  },
  {
    id: 5,
    name: 'Araba Fabrikası',
    price: 120000000,
    img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg',
  },
  // ... Kendi örneklerinizi eklemeye çekinmeyin.
];
let itemler = [
  [(kola = 0)],
  [(iskender = 0)],
  [(yat = 0)],
  [(bahceliEv = 0)],
  [(arabaFab = 0)],
];
var current = Number.MAX_SAFE_INTEGER;
const para = document.querySelector('h3');
para.innerHTML = `Toplam para : $${current}`;
const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function () {
  display();
});

function display() {
  let items = productList.map((item, index) => {
    let available = Math.floor(current / item.price);
    return `<article class='card-item'>
        <img
          class='photo'
          src=${item.img}
          alt=${item.name}
        />
        <div class="item-info">
          <h4>${item.name}</h4>
          <span>${itemler[index][0]}</span>
          <button id=${item.id} type=""button" onclick="handleClick(value, event)" value=${item.price} class="btn">ekle</button>
          <span>${available} adet alınabilir</span>
          <h4 class='price'>$${item.price}</h4>
        </div>
      </article>`;
  });
  items = items.join('');
  // let item = document.createElement('div');
  // item.className = 'section-center';
  // item.innerHTML = items;
  // sectionCenter.appendChild(item);
  // console.log(item);
  sectionCenter.innerHTML = items;
}

const handleClick = (value, event) => {
  // event.currentTarget.
  if (event.currentTarget.id == 1) {
    itemler[0][0]++;
  }
  if (event.currentTarget.id == 2) {
    itemler[1][0]++;
  }
  if (event.currentTarget.id == 3) {
    itemler[2][0]++;
  }
  if (event.currentTarget.id == 4) {
    itemler[3][0]++;
  }
  if (event.currentTarget.id == 5) {
    itemler[4][0]++;
  }
  current -= value;
  para.innerHTML = `Toplam para : $${current}`;
  display();
};
