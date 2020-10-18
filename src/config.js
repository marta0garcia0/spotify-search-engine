export const config = {
    spotifyUrl: 'https://accounts.spotify.com/',
    clientId: '4258fc6965db429ab8d8055e797550d2',
    scope: 'playlist-read-private playlist-read-collaborative playlist-modify-public user-read-recently-played playlist-modify-private ugc-image-upload user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-email user-top-read user-read-playback-state',
    responseType: 'token',
    redirectUri: 'http://localhost:8080/callback',
};