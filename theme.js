function changeTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    const homeSection = document.querySelector('.home');
    const typingText = document.querySelector('.typing-text');
    const typingTextSpan = document.querySelector('.typing-text span');
    const nav = document.querySelector('nav');
    if (homeSection) homeSection.classList.remove('light-theme', 'dark-theme');
    if (typingText) typingText.classList.remove('light-theme', 'dark-theme');
    if (typingTextSpan) typingTextSpan.classList.remove('light-theme', 'dark-theme');
    if (nav) nav.classList.remove('light-theme', 'dark-theme');
    
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        if (homeSection) homeSection.classList.add('light-theme');
        if (typingText) typingText.classList.add('light-theme');
        if (typingTextSpan) typingTextSpan.classList.add('light-theme');
        if (nav) nav.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        if (homeSection) homeSection.classList.add('dark-theme');
        if (typingText) typingText.classList.add('dark-theme');
        if (typingTextSpan) typingTextSpan.classList.add('dark-theme');
        if (nav) nav.classList.add('dark-theme');
    }

    // Save the theme in a cookie
    document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1 year
}

function acceptCookies() {
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000"; // 1 year
    document.getElementById('cookie-consent').style.display = 'none';
    document.getElementById('overlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const cookiesAccepted = document.cookie.split('; ').find(row => row.startsWith('cookies_accepted='));
    if (!cookiesAccepted) {
        document.getElementById('overlay').classList.add('active');
    }

    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (themeCookie) {
        const theme = themeCookie.split('=')[1];
        changeTheme(theme);
        const themeSelector = document.getElementById('theme');
        if (themeSelector) themeSelector.value = theme;
    } else {
        changeTheme('dark'); // Set default theme to dark
        const themeSelector = document.getElementById('theme');
        if (themeSelector) themeSelector.value = 'dark';
    }
});