const { testLogin } = require('../commands/testLogin.js');

async function artilleryScript(page){
    return testLogin(page);
}
module.exports = {
    artilleryScript
};