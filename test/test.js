const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let ts = require('../routes/testservices');
//GIT STAGE

chai.use(chaiHttp);

describe('Simple Math Test Testing Unit Test Gate', () => {
    it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });

});

describe('GET QOTD UNIT TEST', () => {
    it('it should GET a quote of the day', (done) => {
      chai.request(server)
          .get('/getQuoteoftheDay')
          .set('Content-Type', "application/vnd.api+json")
          .set('Accept', "application/vnd.api+json")
          .end((err, res) => {
              if (err) {
                 console.error(err);
                 done(err,null);
              }
              should.not.exist(err);
              res.status.should.eql(200);
              res.type.should.eql("application/json");
              res.body.should.have.property('quotation') //.has.property('quotation')
              res.body.should.have.property('id') //.has.property('id')
              res.body.should.should.contain.an('object') //.should.contain.an('object');
  
            //   res.body.should.have.property('links').has.property('self').to.be.eql(uri);
              done();
          });
    });
});