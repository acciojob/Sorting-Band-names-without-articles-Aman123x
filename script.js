//your code here
function sortBandNames(names) {
  return names.sort((a, b) => {
    // Function to remove articles and leading spaces
    const removeArticles = (name) => name.replace(/^(a|an|the) /i, '');

    const nameA = removeArticles(a).toLowerCase();
    const nameB = removeArticles(b).toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

// Sort the band names
sortBandNames(band);

// Get the ul element by its ID
const ulElement = document.getElementById('band');

// Iterate over the sorted band names and create li elements
band.forEach((band) => {
  const liElement = document.createElement('li');
  liElement.textContent = band;
  ulElement.appendChild(liElement);
});
