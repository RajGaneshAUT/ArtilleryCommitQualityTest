const { userLogsIn } = require('./commands/BasePageFunction.cjs');

async function testFunction(page){
  await userLogsIn(page);
}
module.exports = {
  testFunction
};