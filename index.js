// Pobieranie elementów z drzewa HTML DOM
const inteligent_btn = document.body.getElementsByClassName("inteligent_btn");
const text_box = document.body.getElementsByClassName("text_box_inteligent");
const list_inteligent = document.body.getElementsByClassName("list_inteligent");

const textValues = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit velit. Integer fringilla tristique sapien. Pellentesque leo mauris, ultrices ac diam ac, rutrum sodales nibh. Morbi posuere arcu consectetur congue malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin neque nibh",
    advantages: ["Advantage 1", "Advantage 2", "Advantage 3", "Advantage 4"],
  },
  {
    id: 2,
    text: "Aenean feugiat eu enim eget feugiat. Vestibulum vel vestibulum ligula. Phasellus mattis felis vitae aliquam mollis. ",
    advantages: ["Advantage 4", "Advantage 5", "Advantage 6", "Advantage 7"],
  },
  {
    id: 3,
    text: "Nunc varius libero in malesuada pellentesque. Proin eu laoreet lacus. Donec gravida, arcu non iaculis semper, tellus quam sodales eros, tempus euismod nulla eros ut leo. Proin sed fringilla lacus. Phasellus et ante eu sem dapibus gravida quis sed nisl. Curabitur eu pulvinar purus. Proin in magna mattis, tincidunt eros sit amet, lacinia mi.",
    advantages: ["Advantage 8", "Advantage 9"],
  },
  {
    id: 4,
    text: "In id augue sit amet erat varius finibus. Ut massa nulla, ultricies sed lorem ac, blandit aliquam diam. Nunc a tellus nibh.",
    advantages: ["Advantage 1"],
  },
  {
    id: 5,
    text: "Maecenas facilisis iaculis dolor sed eleifend. Etiam non interdum diam. Aliquam non velit maximus, vehicula ligula a, interdum sem. Sed sit amet est gravida, eleifend purus ac, rhoncus lacus. ",
    advantages: [],
  },
  {
    id: 6,
    text: "Praesent auctor nibh arcu, in tristique tortor pellentesque eu. Nulla non libero sit amet metus pulvinar convallis id commodo nisi. Fusce enim velit, volutpat id nisl nec, laoreet laoreet mauris. Mauris ornare",
    advantages: ["Advantage 1", "Advantage 2", "Advantage 3", "Advantage 4"],
  },
  {
    id: 7,
    text: "In id augue sit amet erat varius finibus. Ut massa nulla, ultricies sed lorem ac, blandit aliquam diam. Nunc a tellus nibh.",
    advantages: ["Advantage 1", "Advantage 2",],
  },
  {
    id: 8,
    text: "Mauris at tincidunt massa. Integer non ipsum vestibulum tellus porttitor varius. Phasellus lobortis ligula sit amet neque efficitur ultrices. Morbi vel nibh eget erat scelerisque consequat consequat a orci. Integer non nulla ut dui bibendum hendrerit. Ut ultrices, ex at fermentum porta, ex magna consequat justo",
    advantages: ["Advantage 1", "Advantage 2", "Advantage 3"],
  },
  {
    id: 9,
    text: "Praesent auctor nibh arcu, in tristique tortor pellentesque eu. Nulla non libero sit amet metus pulvinar convallis id commodo nisi. Fusce enim velit, volutpat id nisl nec, laoreet laoreet mauris. Mauris ornare",
    advantages: [],
  },
  {
    id: 10,
    text: "Mauris at tincidunt massa. Integer non ipsum vestibulum tellus porttitor varius. Phasellus lobortis ligula sit amet neque efficitur ultrices. Morbi vel nibh eget erat scelerisque consequat consequat a orci. Integer non nulla ut dui bibendum hendrerit. Ut ultrices, ex at fermentum porta, ex magna consequat justo",
    advantages: ["Advantage 1", "Advantage 2", "Advantage 3", "Advantage 4"],
  },
  {
    id: 11,
    text: "Maecenas facilisis iaculis dolor sed eleifend. Etiam non interdum diam. Aliquam non velit maximus, vehicula ligula a, interdum sem. Sed sit amet est gravida, eleifend purus ac, rhoncus lacus. ",
    advantages: ["Advantage 1", "Advantage 2", "Advantage 3"],
  },
  {
    id: 12,
    text: "In id augue sit amet erat varius finibus. Ut massa nulla, ultricies sed lorem ac, blandit aliquam diam. Nunc a tellus nibh.",
    advantages: ["Advantage 1", "Advantage 2", "Advantage 3", "Advantage 4"],
  },
];

// Definiowanie domyślnego punktora w HTML
const point = `<i class="bi bi-hand-thumbs-up"></i>`

// Inicjowanie pierwszej treści domyślnej zawartości okna telefonu
const defaultValues = () => {

  text_box[0].textContent = textValues[0].text;

  if (textValues[0].advantages.length > 0) {
    text_box[0].innerHTML += `<h6>Main advantages</h6>`
    textValues[0].advantages.forEach((item) => {
        list_inteligent[0].innerHTML += `
            <li>${point} ${item}</li>
    `;
    }
  )}}

// Funkcja obsługująca zmianę wartości tekstowej
const fnk = (e) => {
  list_inteligent[0].textContent = ""
  const index = e.target.id;
  console.log("Treść nr " + index);
  text_box[0].textContent = textValues[index].text;

  // Obsługa dodawania zalet produktu
  if (textValues[index].advantages.length > 0) {
    text_box[0].innerHTML += `<h6>Main advantages</h6>`
    textValues[index].advantages.forEach((item) => {
        list_inteligent[0].innerHTML += `
            <li>${point} ${item}</li>
    `;
    });
  }
};

defaultValues()

// Pętla nasłuchująca na zdarzenie typu "kliknięcie"
for (let index = 0; index < inteligent_btn.length; index++) {
  const element = inteligent_btn[index];
  element.addEventListener("click", fnk);
}
