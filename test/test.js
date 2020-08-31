import chai from 'chai';
import chaiHttp from 'chai-http';
import app from "../server";
import inject from './testdata';

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    it("it should welcome user", (done) => {
        chai.request(app)
        .get("/")
        .end((err, response) => {
            response.should.have.status(200);
            response.body.message.should.be.eq('Welcome to Tech-companies');
            done();
        });
    });
    
    //test get all
    describe('GET /companies', () => {
        it("it should get all companies", (done) => {
            chai.request(app)
            .get("/companies")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            });
        });
  
    });
    
    //test post route
    describe('POST /companies', () => {
        it("it should POST a new company", (done) => {
            chai.request(app)
            .post('/companies')
            .send(inject.companyData())
            .end((err, response) => {
                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('name', "test data");
                done();
            });
        });
  
    });
    
    //test get by id
    describe('GET /company:id', () => {
        it("it should get a company by id", (done) => {
            chai.request(app)
            .get('/company/1')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('name');
                response.body.should.have.property('location');
                response.body.should.have.property('ceo');
                response.body.should.have.property('id').eq('1');
                done();
            });
        });

        it("it should Not get a company by id", (done) => {
            chai.request(app)
            .get('/company/100000000000000000')
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.have.property('message', 'company not found');
                done();
            });
        });
  
    });

    

    //test put route
    describe('PUT /company/:id', () => {
        it("it should EDIT a selected company", (done) => {
            chai.request(app)
            .put('/company/1')
            .send(inject.companyData())
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('id', '1');
                response.body.should.have.property('name', "test data");
                done();
            });
        });
  
    });

    //test the delete route
    describe('DELETE /company/:id', () => {
        it("it should Not Delete a selected company", (done) => {
            chai.request(app)
            .delete('/company/100000000000')
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.have.property('message', 'company not found');
                done();
            });
        });
  
    });

  
});