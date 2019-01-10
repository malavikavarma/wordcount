const searchFromDB = () => {
  const textSearch = document.getElementById('searchText').value;
  axios
    .get(`http://localhost:8080/searchapi?key=${textSearch}`)
    .then((response) => {
      document.getElementById('displayResult').innerHTML = response.data
        .map((value, index) => `<p>${index + 1}.${value}</p>`)
        .reduce((prev, next) => prev + next);
      return true;
    })
    .catch((error) => {
      document.getElementById('displayResult').innerHTML = 'No such data';
      return error;
    });
};
