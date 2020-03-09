const presence = new Presence({
    clientId: '602573554780733450',
    mediaKeys: false
});

let ready = false, browsingStamp = Math.floor(Date.now() / 1000), state, page;

presence.on('UpdateData', () => {
    switch(window.location.pathname.toLowerCase()) {
        case '/': {
            state = 'On the homepage';
            page = 'Browsing Livida Blog';
            break;
        }
        case '/signin/': {
            state = 'On the login page';
            page = 'Browsing Livida Blog';
            break;
        }
        case '/signup/': {
            state = 'On the signup page';
            page = 'Browsing Livida Blog';
            break;
        }
        case '/account/': {
            state = 'On the account page';
            page = 'Browsing Livida Blog';
            break;
        }
        default: {
            state = document.querySelector('title').innerText;
            page = 'Reading an article';
        }
    }

    presence.setActivity({
        state: state,
        details: page,
        largeImageKey: 'icon',
        startTimestamp: browsingStamp
    });
});