const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const newText = document.getElementById('text');
    newText.textContent = 'ボタンをクリックしました';
});