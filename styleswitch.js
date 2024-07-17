function toggleStylesheet() {
    const currentTheme = document.getElementById('theme-stylesheet').getAttribute('href');

    if (currentTheme === 'website/fun/styles/robot.css') {
        document.getElementById('theme-stylesheet').setAttribute('href', 'website/serious/styles/style.css');
        document.getElementById('homepage').setAttribute('href', 'website/serious/serious_entrypoint.html');
        document.getElementById('toggle-stylesheet').textContent = 'Switch to fun theme';
    } else {
        document.getElementById('theme-stylesheet').setAttribute('href', 'website/fun/styles/robot.css');
        document.getElementById('homepage').setAttribute('href', 'website/fun/fun_entrypoint.html');
        document.getElementById('toggle-stylesheet').textContent = 'Switch to serious theme';
    }
}
