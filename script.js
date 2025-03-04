function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

function showAnimation() {
    const animation = document.getElementById('animation');
    animation.classList.remove('hidden');
    animation.classList.remove('fade-out');
    animation.classList.add('fade-in');
    
    setTimeout(() => {
        animation.classList.remove('fade-in');
        animation.classList.add('fade-out');
        setTimeout(() => {
            animation.classList.add('hidden');
        }, 1000); // A fade-out animáció időtartama
    }, 5000);
}

function changeTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    const homeSection = document.querySelector('.home');
    const typingText = document.querySelector('.typing-text');
    const typingTextSpan = document.querySelector('.typing-text span');
    homeSection.classList.remove('light-theme', 'dark-theme');
    typingText.classList.remove('light-theme', 'dark-theme');
    typingTextSpan.classList.remove('light-theme', 'dark-theme');
    
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        homeSection.classList.add('light-theme');
        typingText.classList.add('light-theme');
        typingTextSpan.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        homeSection.classList.add('dark-theme');
        typingText.classList.add('dark-theme');
        typingTextSpan.classList.add('dark-theme');
    }

    // Save the theme in a cookie
    document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1 year
}

function acceptCookies() {
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000"; // 1 year
    document.getElementById('cookie-consent').style.display = 'none';
}

// Check if cookies are accepted and set the theme from the cookie
document.addEventListener('DOMContentLoaded', () => {
    const cookiesAccepted = document.cookie.split('; ').find(row => row.startsWith('cookies_accepted='));
    if (cookiesAccepted) {
        document.getElementById('cookie-consent').style.display = 'none';
    }

    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (themeCookie) {
        const theme = themeCookie.split('=')[1];
        changeTheme(theme);
        document.getElementById('theme').value = theme;
    } else {
        changeTheme('dark'); // Set default theme to dark
        document.getElementById('theme').value = 'dark';
    }
});