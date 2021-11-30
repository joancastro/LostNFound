
describe('adminPage', function () {

    it('heading exists', function() {
        const heading = document.querySelector('.heading');
        chai.expect(heading.innerHTML).to.equal('Current Records')
    });

    it('table loads records', function() {
        const table = document.querySelector('.styled-table');
        chai.expect(table).to.exist
    });



});
