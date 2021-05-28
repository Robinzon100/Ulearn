//@ts-ignore
const renewAccExpCookies = require("./tokenValidations");



test('returns serilized cookies ready to be used', () => {
    expect(
        renewAccExpCookies({
            expiration: 'asdf',
            accessToken: 'asd'
        }))
        .toBe([
            'auth_token_expiration=asdf',
            'auth_access_token=asd'
        ]);
});