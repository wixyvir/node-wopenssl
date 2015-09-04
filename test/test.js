var x509 = require('../index'),
    fs = require('fs'),
    path = require('path');

// All cert files should read without throwing an error.
// Simple enough test, no? 


console.log("=========== [ Certificates parsing ] ==========");

fs.readdirSync(path.join(__dirname, 'certs')).forEach(function (file) {
  console.log("File: %s", file);
  console.log(x509.parseCert(path.join(__dirname, 'certs', file)));
  // x509.parseCert(path.join(__dirname, 'certs', file));
  console.log();
});

console.log("=========== [ p12 extracting       ] ==========");

console.log(x509.parseCert(x509.extractP12("test/p12/cert.p12", "password").certificate));

console.log("=========== [ crl verifying        ] ==========");

console.log(x509.verifycrl("test/verify/keys/mandela.crt", "test/verify/keys/crl.pem"));
