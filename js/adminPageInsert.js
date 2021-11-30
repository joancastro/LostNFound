function insertNew()
{
    let item = $('#item').val();
    let description = $('#description').val();
    let location = $('#location').val();
    let location_description = $('#location_description').val();
    let date = $('#date').val();
    let adminID = $('#adminID').val();
    let witness = $('#witness').val();
    let auID = $('#auID').val();
    let phone = $('#phone').val();

    let URL = "http://127.0.0.1:3000/records";

    let d = {
        item : `${item}`,
        description : `${description}`,
        location : `${location}`,
        location_description : `${location_description}`,
        date : `${date}`,
        adminID : `${adminID}`,
        witness : `${witness}`,
        auID : `${auID}`,
        phone : `${phone}`
    };

    $.ajax({
        url: URL,
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify(d),
        success: function (data) {
            console.log(`Insertion Success`);
            console.log(data);
            window.open("adminPage.html","_self");
        },
        error: function (xhr, status, error) {
            alert("Error");
            console.log(`AJAX ERROR - INSERTION`);
            console.log(error);
        }
    })
}