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

function acceptCookies() {
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000"; 
    document.getElementById('cookie-consent').style.display = 'none';
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
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

    const counterCookie = getCookie('social_credit');
    if (counterCookie) {
        counter = parseInt(counterCookie, 10);
        document.getElementById('counter').innerText = `Social credit: ${counter}`;
    }
});

let counter = 0;

function incrementCounter(amount = 690000000) {
    counter += amount;
    document.getElementById('counter').innerText = `Social credit: ${counter}`;
    setCookie('social_credit', counter, 365);
}

function decrementCounter(amount = 100) {
    counter -= amount;
    document.getElementById('counter').innerText = `Social credit: ${counter}`;
    setCookie('social_credit', counter, 365);
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

function toggleFlip(card) {
    card.classList.toggle('card-flip');
}