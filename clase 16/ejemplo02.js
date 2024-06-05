const link = document.getElementById('link');

link.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Quisite ir a: ' + e.currentTarget.href)
})