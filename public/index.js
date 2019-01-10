const connection = () => {
  const txtArea = document.getElementById('txt1').value;
  axios
    .get(`http://localhost:8080/detectlanguage?text=${txtArea}`)
    .then((response) => {
      document.getElementById('span4').innerHTML = response.data;
      // console.log(dbConnect);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const updateCount = () => {
  const txtarea = document.getElementById('txt1').value;
  const replaced = txtarea.replace(/\s\s+/g, ' ');
  const char = txtarea.length;
  document.getElementById('span1').innerHTML = char;
  const charSplit = replaced.split(' ').length;
  document.getElementById('span2').innerHTML = charSplit;
  const sentnSplit = txtarea.split('.').length;
  document.getElementById('span3').innerHTML = sentnSplit;
};
