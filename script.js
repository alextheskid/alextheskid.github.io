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
        }, 1000); 
    }, 5000);
}

function changeTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    const homeSection = document.querySelector('.home');
    const typingText = document.querySelector('.typing-text');
    const typingTextSpan = document.querySelector('.typing-text span');
    const nav = document.querySelector('nav');
    homeSection.classList.remove('light-theme', 'dark-theme');
    typingText.classList.remove('light-theme', 'dark-theme');
    typingTextSpan.classList.remove('light-theme', 'dark-theme');
    nav.classList.remove('light-theme', 'dark-theme');
    
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        homeSection.classList.add('light-theme');
        typingText.classList.add('light-theme');
        typingTextSpan.classList.add('light-theme');
        nav.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        homeSection.classList.add('dark-theme');
        typingText.classList.add('dark-theme');
        typingTextSpan.classList.add('dark-theme');
        nav.classList.add('dark-theme');
    }

    // Save the theme in a cookie
    document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1 year
}

function acceptCookies() {
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000"; 
    document.getElementById('cookie-consent').style.display = 'none';
}


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
        changeTheme('dark'); 
        document.getElementById('theme').value = 'dark';
    }
});

let counter = 0;

function incrementCounter(amount = 690000000) {
    counter += amount; 
    document.getElementById('counter').innerText = `Social credit: ${counter}`;
}

function decrementCounter(amount = 100) {
    counter -= amount; 
    document.getElementById('counter').innerText = `Social credit: ${counter}`;
}

function updateCounter(value) {
    if (value === 'yes') {
        incrementCounter(30000000000); 
        showYesAnimation(); 
    } else if (value === 'no') {
        decrementCounter(100000000000); 
        showNoAnimation(); 
    }
}

function showYesAnimation() {
    const yesAnimation = document.getElementById('yes-animation');
    const yesAudio = document.getElementById('yes-audio');
    
    yesAnimation.classList.remove('hidden');
    yesAnimation.classList.remove('fade-out');
    yesAnimation.classList.add('fade-in');
    
    yesAudio.volume = 0.2; 
    yesAudio.play(); 
    
    setTimeout(() => {
        yesAudio.pause(); 
        yesAudio.currentTime = 0; 
    }, 12000); 

    setTimeout(() => {
        yesAnimation.classList.remove('fade-in');
        yesAnimation.classList.add('fade-out');
        setTimeout(() => {
            yesAnimation.classList.add('hidden');
        }, 800); 
    }, 3000);
}

function showNoAnimation() {
    const noAnimation = document.getElementById('no-animation');
    noAnimation.classList.remove('hidden');
    noAnimation.classList.remove('fade-out');
    noAnimation.classList.add('fade-in');
    
    setTimeout(() => {
        noAnimation.classList.remove('fade-in');
        noAnimation.classList.add('fade-out');
        setTimeout(() => {
            noAnimation.classList.add('hidden');
        }, 800); 
    }, 3000);
}