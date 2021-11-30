let chai = require("chai");
let chai_http = require("chai-http")
let server = require('../server');

chai.should();

chai.use(chai_http);

describe('Records API', () => {
    /**
     * Test the GET route
     */
    describe("GET /records", () => {
        it('should /GET all the records (status 200)', function (done) {
            chai.request(server)
                .get("/records")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    //response.body.length.should.be.eq(12);
                    done();
                });
        });

        it('should NOT /GET all the records (status 404)', function (done) {
            chai.request(server)
                .get("/record")
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    /**
     * Test the GET (by id) route
     */
    describe("GET /records/:id", () => {
        it('should /GET a record by ID (status 200)', function (done) {
            const recordID = 115;
            chai.request(server)
                .get("/records/" + recordID)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });

        it('should NOT /GET a record by ID (empty record)', function (done) {
            const recordID = 400;
            chai.request(server)
                .get("/records/" + recordID)
                .end((error, response) => {
                    //will always return an empty array due to structure of REST node.js files
                    response.text.should.be.eq("[]")
                    done();
                });
        });
    });

    /**
     * Test the POST route
     */
    describe("POST /records", () => {
        it('should /POST a new record (status 200)', function (done) {
            const record = {
                item: "node.js",
                description: "node.js example test",
                location: "Testing Hall",
                location_description: "testing",
                date: "2021-04-23",
                adminID: "12345",
                witness: "Joan Castro",
                auID: "0997896",
                phone: "630-328-3219"
            };

            chai.request(server)
                .post("/records")
                .send(record)
                .end((error, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it('should NOT /POST a new record with missing properties (status 404)', function (done) {
            const record = {
                item: "node.js",
                description: "node.js example test",
                location: "Testing Hall",
                location_description: "testing",
                date: "2021-04-23"
            };

            chai.request(server)
                .post("/records")
                .send(record)
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    /**
     * Test the PUT route
     */
    describe("PUT /records/:id", () => {
        it('should /PUT a new record (status 200)', function (done) {
            const record = {
                item: "node.js update",
                description: "node.js update test",
                location: "Update Hall",
                location_description: "updating",
                date: "2021-04-23",
                adminID: "12345",
                witness: "Joan Castro",
                auID: "0997896",
                phone: "630-328-3219"
            };
            const recordID = 116;
            chai.request(server)
                .put("/records/" + recordID)
                .send(record)
                .end((error, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it('should NOT /PUT a new record (status 404)', function (done) {
            const record = {
                item: "node.js update2",
                description: "node.js update2 test",
                location: "Update2 Hall",
                location_description: "updating2",
                date: "2021-04-23",
                adminID: "12345"
            };
            const recordID = 116;
            chai.request(server)
                .put("/records/" + recordID)
                .send(record)
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    /**
     * Test the DELETE route
     */
    describe("DELETE /records/:id", () => {
        it('should /DELETE a record with specific ID (status 200)', function (done) {
            const recordID = 122;
            chai.request(server)
                .delete("/records/" + recordID)
                .end((error, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it('should NOT /DELETE a record with specific ID (status 404)', function (done) {
            const recordID = 123;
            chai.request(server)
                .delete("/record/" + recordID)
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });
})



describe('Claimed Records API', () => {
    /**
     * Test the GET route
     */
    describe("GET /claimedRecords", () => {
        it('should /GET all the claimed records (status 200)', function (done) {
            chai.request(server)
                .get("/claimedRecords")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    //response.body.length.should.be.eq(12);
                    done();
                });
        });

        it('should NOT /GET all the claimed records (status 404)', function (done) {
            chai.request(server)
                .get("/claimedRecord")
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    /**
     * Test the GET (by id) route
     */
    describe("GET /claimedRecords/:id", () => {
        it('should /GET a claimed record by ID (status 200)', function (done) {
            const recordID = 61;
            chai.request(server)
                .get("/claimedRecords/" + recordID)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });

        it('should NOT /GET a claimed record by ID (empty record)', function (done) {
            const recordID = 400;
            chai.request(server)
                .get("/claimedRecords/" + recordID)
                .end((error, response) => {
                    //will always return an empty array due to structure of REST node.js files
                    response.text.should.be.eq("[]")
                    done();
                });
        });
    });

    /**
     * Test the POST route
     */
    describe("POST /claimedRecords", () => {
        it('should /POST a new claimed record (status 200)', function (done) {
            const claimedRecord = {
                item: "node.js",
                description: "node.js example test",
                location: "Testing Hall",
                location_description: "testing",
                date: "2021-04-23",
                adminID: "12345",
                witness: "Joan Castro",
                auID: "0997896",
                phone: "630-328-3219",
                claimName: "Joan Castro",
                claimAUID: "1234567",
                claimPhone: "123-444-7899"
            };

            chai.request(server)
                .post("/claimedRecords")
                .send(claimedRecord)
                .end((error, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it('should NOT /POST a new claimed record with missing properties (status 404)', function (done) {
            const claimedRecord = {
                item: "node.js",
                description: "node.js example test",
                location: "Testing Hall",
                location_description: "testing",
                date: "2021-04-23"
            };

            chai.request(server)
                .post("/claimedRecords")
                .send(claimedRecord)
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    /**
     * Test the PUT route
     */
    describe("PUT /claimedRecords/:id", () => {
        it('should /PUT a new claimed record (status 200)', function (done) {
            const claimedRecord = {
                item: "node.js",
                description: "node.js example test",
                location: "Testing Hall",
                location_description: "testing",
                date: "2021-04-23",
                adminID: "12345",
                witness: "Joan Castro",
                auID: "0997896",
                phone: "630-328-3219",
                claimName: "Joan Castro",
                claimAUID: "1234567",
                claimPhone: "123-444-7899"
            };

            const recordID = 63;
            chai.request(server)
                .put("/claimedRecords/" + recordID)
                .send(claimedRecord)
                .end((error, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it('should NOT /PUT a new claimed record (status 404)', function (done) {
            const record = {
                item: "node.js update2",
                description: "node.js update2 test",
                location: "Update2 Hall",
                location_description: "updating2",
                date: "2021-04-23",
                adminID: "12345"
            };
            const recordID = 64;
            chai.request(server)
                .put("/claimedRecords/" + recordID)
                .send(record)
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    /**
     * Test the DELETE route
     */
    describe("DELETE /claimedRecords/:id", () => {
        it('should /DELETE a claimed record with specific ID (status 200)', function (done) {
            const recordID = 66;
            chai.request(server)
                .delete("/claimedRecords/" + recordID)
                .end((error, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it('should NOT /DELETE a claimed record with specific ID (status 404)', function (done) {
            const recordID = 67;
            chai.request(server)
                .delete("/claimedRecord/" + recordID)
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

})