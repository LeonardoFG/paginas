//[{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
const users = [{ id: 1, username: 'teste1@mail.com', password: 'Qwerty1', firstName: 'Test 1', lastName: '1'},
                { id: 2, username: 'teste2@mail.com', password: 'Qwerty2', firstName: 'Test 2', lastName: '2'},
                { id: 3, username: 'teste3@mail.com', password: 'Qwerty3', firstName: 'Test 3', lastName: '3'},
                { id: 4, username: 'teste4@mail.com', password: 'Qwerty4', firstName: 'Test 4', lastName: '4'},
                { id: 5, username: 'teste5@mail.com', password: 'Qwerty5', firstName: 'Test 5', lastName: '5'},
                { id: 6, username: 'teste6@mail.com', password: 'Qwerty6', firstName: 'Test 6', lastName: '6'},
                { id: 7, username: 'teste7@mail.com', password: 'Qwerty7', firstName: 'Test 7', lastName: '7'},
                { id: 8, username: 'teste8@mail.com', password: 'Qwerty8', firstName: 'Test 8', lastName: '8'},
                { id: 9, username: 'teste9@mail.com', password: 'Qwerty9', firstName: 'Test 9', lastName: '9'},
                { id: 10, username: 'teste10@mail.com', password: 'Qwerty10', firstName: 'Test 10', lastName: '10'},
                { id: 11, username: 'teste11', password: 'Qwerty11', firstName: 'Test 11', lastName: '11'}];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}
