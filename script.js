function showProgress() {
    const username = document.getElementById('username').value;
    const userProgress = document.getElementById('userProgress');

    if (username) {
        userProgress.innerHTML = `
            <h4 class="text-primary">Hello, ${username}!</h4>
            <p>Your progress will be displayed here. Check back soon!</p>
        `;
    } else {
        alert('Please enter your name.');
    }
}
