
describe('adminPageClaimed', function() {

    it('heading exists', function() {
        const heading = document.querySelector('.heading');
        chai.expect(heading.innerHTML).to.equal('Claimed Records')
    });

    it('table loads records', async function() {
        const table = document.querySelector('.styled-table');
        chai.expect(table).to.exist
    })

});
