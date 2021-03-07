import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import testData from './testdata';

chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
  it('it should welcome user', (done) => {
    chai.request(app)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.message.should.be.eq('Welcome to Tech-companies');
        done();
      });
  });

  it('it should get all companies', (done) => {
    chai.request(app)
      .get('/api/companies')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        done();
      });
  });

  it('it should POST a new company', (done) => {
    chai.request(app)
      .post('/api/company')
      .send(testData)
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.data.should.have.property('id');
        response.body.data.should.have.property('name', 'test data');
        done();
      });
  });

  it('it should get a company by id', (done) => {
    chai.request(app)
      .get('/api/company/1')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.data.should.have.property('name');
        response.body.data.should.have.property('location');
        response.body.data.should.have.property('ceo');
        response.body.data.should.have.property('id').eq('1');
        done();
      });
  });

  it('it should return 404 when getting a company not in DB', (done) => {
    chai.request(app)
      .get('/api/company/100000000000000000')
      .end((err, response) => {
        response.should.have.status(404);
        response.body.should.have.property('error', 'company not found');
        done();
      });
  });

  it('it should update a selected company', (done) => {
    chai.request(app)
      .put('/api/company/1')
      .send({ ceo: 'bela' })
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.data.should.have.property('id', '1');
        response.body.data.should.have.property('ceo', 'bela');
        done();
      });
  });

  it('it should return 404 when deleting a company not in DB', (done) => {
    chai.request(app)
      .delete('/api/company/100000000000')
      .end((err, response) => {
        response.should.have.status(404);
        response.body.should.have.property('error', 'company not found');
        done();
      });
  });
});
