const options = {
    allowedConnections: ['email'],
    passwordlessMethod: 'link',
    auth: {
        redirectUrl: 'http://localhost:3000/rmt',
        params: {
            scope: 'openid profile email'
        }
    },
    theme: {
        labeledSubmitButton: true,
        logo: 'https://i.imgur.com/Kug5bGI.png'
    }
}

export default options;