module.exports = async function(callback) {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log("Account balance:", web3.utils.fromWei(balance, "ether"), "ETH");
    callback();
};
