export const config = {
    spotifyUrl: 'https://accounts.spotify.com/',
    clientId: '4258fc6965db429ab8d8055e797550d2',
    scope: 'user-read-currently-playing user-read-playback-state ugc-image-upload user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-email user-top-read user-read-playback-state',
    responseType: 'token',
    redirectUri: '/callback',
    spotifyAPI: 'https://api.spotify.com/v1/',
    spotifyTypes: ['artist', 'track', 'album'],
};