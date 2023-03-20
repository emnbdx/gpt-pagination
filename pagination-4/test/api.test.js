const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server/app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("API endpoints", () => {
  it("should fetch paginated items", (done) => {
    chai
      .request(app)
      .get("/api/items?page=1&itemsPerPage=3")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.items).to.be.an("array");
        expect(res.body.totalItems).to.be.a("number");
        done();
      });
  });
});
