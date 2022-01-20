function addItem(item) {
  const itemHTML = '<div class="card" style="width: 18rem;">\n' +
      '    <div class="card-body">\n' +
      '        <h5 class="card-title">' + item.name + '</h5>\n' +
      '        <p class="card-text">' + item.pantone_value + '</p>\n' +
      '        <div style="background:' + item.color + ';">' + item.color + '</div>\n' +
      '    </div>\n' +
      '</div>\n' +
      '<br/>';
  const itemsContainer = document.querySelector("#list-items");
  itemsContainer.innerHTML += itemHTML;
}

// after fetching the colors, call addItem with each color
function fetchColorsList() {
  fetch('/js/data.json')
      .then((response) => response.json()) // transforms data into json
      .then(response => {
          for (let i = 0; i < response.data.length; i++) {
              addItem(response.data[i]);
          }

          const colorsJson = JSON.stringify(response.data);
          localStorage.setItem('colors', colorsJson);
      })
}

function loadColorsFromStorage() {
  if (localStorage.getItem('colors')) {
      const colorsJson = localStorage.getItem('colors');
      const colors = JSON.parse(colorsJson);
      itemsContainer.innerHTML = '';
      for (let i = 0; i < colors.length; i++) {
          addItem(colors[i]);
      }
  }
}

fetchColorsList();
loadColorsFromStorage();