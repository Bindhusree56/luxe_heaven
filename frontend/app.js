

// ------------------- Product Filter -------------------
const container = document.getElementById("productContainer");
const filters = document.querySelectorAll(".filter");

const products = [
  {
    name: "Giorgio Armani",
    category: "sunglasses",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/Lunetterie_G%C3%A9n%C3%A9rale_Eyewear_Campaign__Fashion_photography._Vintage_Aesthetic._Sunglasses_Made_in_Japan._Fashion_lookbook_jjmiqf.jpg"
  },
    {
    name: "Sotirio Bulgari",
    category: "sunglasses",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/download_1_n09egv.jpg"
  },
    {
    name: "Oakley Wraps",
    category: "sunglasses",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344129/%D0%A1%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%BE%D1%87%D0%BA%D0%BE%D0%B2_%EF%B8%8F_Idol_Production_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_m6c4cz.jpg"
  },
    {
    name: "COTIA fashion",
    category: "sunglasses",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/download_synvm6.jpg"
  },
    {
    name: "Celine",
    category: "sunglasses",
    image: "Celine RTW Spring 2022.jpg"
  },
  {
    name: "LOEWE",
    category: "handbags",
      image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/I_m_a_Stylist_and_I_Think_These_Are_the_Designer_Bags_Worth_Buying_hbrlkl.jpg"
  },
  {
    name: "Billini",
    category: "handbags",
      image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_3_kgt1ky.jpg"
  },
  {
    name: "Sac a main de Voyage",
    category: "handbags",
      image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_4_ifzj7e.jpg"
  },
  {
    name: "Anne Klein",
    category: "handbags",
      image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/Ruched_Chain_Baguette_Bag_ofeeze.jpg"
  },

  {
    name: "Channel",
    category: "perfumes",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/AI_creator_-_%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F_%D0%A1%D0%9E%D0%A6%D0%9C%D0%95%D0%A0%D0%95%D0%96_ah8bq6.jpg"
  },
  {
    name: "YSL",
    category: "perfumes",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_2_h0ozpr.jpg"
  },
  {
    name: "Imensi",
    category: "perfumes",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_1_iqcyll.jpg"
  },
  {
    name: "YSL",
    category: "perfumes",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/download_qjw2gr.jpg"
  },
  {
    name: "Gold Chain",
    category: "neckchains",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Jewellery_Photography_For_Abbott_Lyon_enfkre.jpg"
  },
  {
    name: "Gold Chain",
    category: "neckchains",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Twenty_Compass_FW22_part2_-_Sarah_Emily_S__zub8jx.jpg"
  },
  {
    name: "Gold Chain",
    category: "neckchains",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/milliaoficial_vs8d7n.jpg"
  },
  {
    name: "Accessories",
    category: "neckchains",
    image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344707/7MM_LEROS_HERRINGBONE_CHAIN_mwq964.jpg"
  },
];


function renderProducts(filteredCategories) {
  container.innerHTML = "";

  const filtered = filteredCategories.length === 0
    ? products
    : products.filter(p => filteredCategories.includes(p.category));

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <h4>${product.name}</h4>
      <p>${product.category}</p>
    `;
    container.appendChild(div);
  });
}

 console.log("something which is so beyind ours");
 let something = [1,2,3,4,5].map(p=>p*2);
 console.log(something);

function updateFilters() {
  const activeFilters = Array.from(filters)
    .filter(f => f.checked)
    .map(f => f.value);

  renderProducts(activeFilters);
}

filters.forEach(filter => {
  filter.addEventListener("change", updateFilters);
});

renderProducts([]); 
const interact = document.querySelector('.interact');
const notes = document.getElementById('note');
const colorpicker = document.getElementById('colorpicker');
const notesContainer = document.getElementById('notesContainer');

function getNotesFromStorage() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotesToStorage(notesArray) {
  localStorage.setItem("notes", JSON.stringify(notesArray));
}

function displayNotes() {
  notesContainer.innerHTML = "";
  const notesArray = getNotesFromStorage();

  notesArray.forEach(({ text, color }, index) => {
    const n_data = document.createElement('div');
    n_data.className = 'note';
    n_data.textContent = text;
    n_data.style.backgroundColor = color;

    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'delete-btn';
    del.onclick = () => {
      notesArray.splice(index, 1);
      saveNotesToStorage(notesArray);
      displayNotes();
    };

    n_data.appendChild(del);
    notesContainer.appendChild(n_data);
  });
}

function addNotes() {
  const color = colorpicker.value;
  const text = notes.value.trim();
  if (!text) return;

  const notesArray = getNotesFromStorage();
  notesArray.push({ text, color });
  saveNotesToStorage(notesArray);
  notes.value = '';
  displayNotes();
}

displayNotes(); // Load existing notes

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
  });
});