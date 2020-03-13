document.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', "echo 'You have been warned!'");
    event.preventDefault();
});