function testAPI() {
  fetch('/.netlify/functions/deepseek')
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML = data.reply;
  })
  .catch(error => {
    document.getElementById('result').innerHTML = 'Error: ' + error.message;
  });
}
document.getElementById('testApi').addEventListener('click', testAPI);