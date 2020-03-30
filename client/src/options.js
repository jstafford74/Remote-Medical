const options = {
    allowedConnections: ['email'],
    passwordlessMethod: 'link',
    auth: {
        redirectUrl: process.env.AUTH0_REDIRECT_URL,
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