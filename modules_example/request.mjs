//module.exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return 'encrypted Data';
}

 function send(url, data){
const encryptedData = encrypt(data);
console.log(`Sending ${encryptedData} to ${url}`);

}

//module.exports.send = send;
export {
 // REQUEST_TIMEOUT,
  send
};