
describe('adminPageInsert', function() {

    it('heading exists', function() {
        const heading = document.querySelector('h2');
        chai.expect(heading.innerHTML).to.equal('Insert a New Record')
    });

    it('insert', function() {
        const item = document.querySelector('#item');
        chai.expect(item).to.exist;
        item.value = 'test item';

        const description = document.querySelector('#description');
        chai.expect(description).to.exist;
        description.value = 'test description';

        const locationDescription = document.querySelector('#description');
        chai.expect(locationDescription).to.exist;
        locationDescription.value = 'test location description';

        const date = document.querySelector('#date');
        chai.expect(date).to.exist;
        date.value = '2020-04-23';

        const adminID = document.querySelector('#adminID');
        chai.expect(adminID).to.exist;
        adminID.value = '1';

        const witness = document.querySelector('#witness');
        chai.expect(witness).to.exist;
        witness.value = 'test witness';

        const auID = document.querySelector('#auID');
        chai.expect(auID).to.exist;
        auID.value = '1';

        const phone = document.querySelector('#phone');
        chai.expect(phone).to.exist;
        phone.value = '123-123-1234';


    })

});
