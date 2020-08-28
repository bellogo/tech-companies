let chai = require("chai");
let server = require("../server");


//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    describe('GET /companies', () => {
        it("it should get all companies", (done) => {
            
        });
  
    });
  
});