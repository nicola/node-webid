var WebID = require('../')
var assert = require('assert')

var validCert = {
  subject: { O: 'WebID', CN: 'Nicola Greco (test) [on test_nicola.databox.me]' },
  issuer: { O: 'WebID', CN: 'Nicola Greco (test) [on test_nicola.databox.me]' },
  subjectaltname: 'URI:https://test_nicola.databox.me/profile/card#me',
  modulus: 'C62AE4CE77A8D915527F79EE1B5365099A35A3BF8E4AA68ED7CBF4D6B966ACE0FCAD79DE66A0EA89FF5EF8DAB2619F51E2F28227C9AA594BA3A4176723BA00813D8F8C738359F6240DF8FADD1A7AE56F2B24E7329A189E1065E3E7C2CEC96CC57CD9D3BF782DC15C11FBEFD24E536C46E8E1285BEC27CB3CC6C295595F18BC564A6ACA45ABCB8AD0C6617F42F5151DDB1A42513BE7AA9E2593DFDBB03938C15136C202C61E59DFE7C563F56301B5B29F91C03A9C92458BA26918E22CB137B998FF76EC85E97D16424078A949F491E348D9E33A43C9D5D938C6E12B2F2015FA2C1A950E28C6ECC6DD70CE228275DBB4C085BC4063DA24178F5B13601E3E6CE17F',
  exponent: '10001',
  valid_from: 'Jan  1 00:00:00 2000 GMT',
  valid_to: 'Dec 31 23:59:59 2049 GMT',
  fingerprint: '17:09:CB:F5:8D:D7:49:BB:36:45:B8:96:01:C9:0F:0D:E7:56:5B:C0',
  serialNumber: '2A'
}

describe('WebID', function () {

  describe('Verification Agent', function () {

    it('valid certificate should have a result', function (done) {
      this.timeout(10000);
      var agent = new WebID.VerificationAgent(validCert)
      agent.verify(function (err, result) {
        assert(!!result)
        assert(!err)
        done()
      })
    })

    it('should throw error certificate is missing or empty', function () {
      var cert = null
      assert.throws(function () {
        var agent = new WebID.VerificationAgent(cert)
      }, Error)

      var cert = {}
      assert.throws(function () {
        var agent = new WebID.VerificationAgent(cert)
      }, Error)
    })
  })
})