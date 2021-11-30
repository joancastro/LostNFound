
describe('non-adminPage', function () {

    it('heading exists', function() {
        const heading = document.querySelector('.heading');
        chai.expect(heading.innerHTML).to.equal('Current Records')
    });

    it('table loads records', function() {
        const table = document.querySelector('.styled-table');
        chai.expect(table).to.exist
    });

    it('search',  function() {
        const table = document.querySelector('#search');
        chai.expect(table).to.exist;
        const search = document.querySelector('#search');
        search.value = 'test';
        const event = document.createEvent('KeyboardEvent');
        event.initEvent('keyup');
        search.dispatchEvent(event);
        const description = document.querySelector('[data-label="Description"]')
        chai.expect(description.innerHTML).to.contain('test')
    })

});
