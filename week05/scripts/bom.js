const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

// Mostrar los capítulos almacenados al cargar la página
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Manejar clic en el botón para agregar nuevo capítulo
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    displayList(input.value);           // Mostrar el nuevo capítulo
    chaptersArray.push(input.value);    // Agregar a la lista
    setChapterList();                   // Guardar en localStorage
    input.value = '';                   // Limpiar input
    input.focus();                      // Devolver el foco
  }
});

// Función para mostrar un capítulo en la lista
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // incluye el ❌
    input.focus();
  });
}

// Función para obtener capítulos del localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

// Función para guardar capítulos en localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Función para eliminar un capítulo del array y localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // quitar el ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
