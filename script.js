document.getElementById('testApi').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/generate-table');
        const data = await response.json();
        document.getElementById('result').innerHTML = 
            `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        document.getElementById('result').innerHTML = 
            `<p style="color: red;">Error: ${error.message}</p>`;
    }
});