const review = [
  {
    id: 1,
    name: "Sara Jones",
    job: "UX Designer",
    img: "../images/person-1.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 2,
    name: "Arnab Ghosh",
    job: "Front-end Developer",
    img: "../images/person-2.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 3,
    name: "Abhinav Shekhar",
    job: "Back-end Developer",
    img: "../images/person-3.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 4,
    name: "Rehman Qureshi",
    job: "Software Developer",
    img: "../images/person-4.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 5,
    name: "Jordan Sinoa",
    job: "Chatered Accountant",
    img: "../images/person-5.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 6,
    name: "Michal Phels",
    job: "Managing Director",
    img: "../images/person-6.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 7,
    name: "Mike Shinoda",
    job: "Singer",
    img: "../images/person-7.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },

  {
    id: 8,
    name: "Gordan Ramsay",
    job: "Chef",
    img: "../images/person-8.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum blanditiis a eum! Fuga et id inventore laboriosam quibusdam saepe sunt incidunt minima, voluptates, aut reprehenderit enim dolores porro voluptas?",
  },
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
  switchPerson();
});

const switchPerson = (currentItem) => {
  const item = review[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
};

prevBtn.addEventListener("click", function(){
  if(currentItem < 0){
    currentItem = review.length-1;
  }
  switchPerson(currentItem);
  currentItem--;
});

nextBtn.addEventListener("click", function () {
  if(currentItem > review.length - 1){
    currentItem = 0;
  } 
  switchPerson(currentItem);
  currentItem++;
});

randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random()*review.length-1);
  switchPerson(currentItem);
})