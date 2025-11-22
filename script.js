function testAPI() {
fetch('/.netlify/functions/deepseek')
.then(response => response.json())
.then(data => {
document.getElementById('result').innerHTML = JSON.stringify(data);
})
.catch(error => {
document.getElementById('result').innerHTML = 'Error: ' + error.message;
});
}
document.getElementById('testApi').addEventListener('click', testAPI);