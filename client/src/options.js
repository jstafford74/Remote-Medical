const options = {
    allowedConnections: ['email'],
    passwordlessMethod: 'link',
    auth: {
        redirectUrl:
            // 'https://remote-medical.herokuapp.com/telemed',
            'http://localhost:3000/telemed',
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