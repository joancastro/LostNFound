function search_table(value) {
    $('#records_table tr').each(function () {
        let found = 'false';
        $(this).each(function () {
            if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                found = 'true';
            }
        });
        if (found === 'true') {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

$(document).ready(function() {
    let id = document.getElementById("recordArea");
    let URL ="http://127.0.0.1:3000/records";

    $.ajax({
        url: URL,
        headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
        contentType: 'application/json',
        async: true,
        crossDomain : true,
        success : function(data)
        {
            let oStr = "<table class='styled-table' id='records_table'>";
            oStr += `<thead>`;
            oStr += `<tr><th>Item</th><th>Description</th><th>Location</th><th>Location Description</th><th>Date</th></tr>`;
            oStr += `</thead>`;
            oStr += `<tbody>`;

            console.log(`data:`);
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                let ite = data[i].item;
                let des = data[i].description;
                let loc = data[i].location;
                let loc_des = data[i].location_description;
                let dat = data[i].date;

                oStr += `<tr><td data-label="Item">${ite}</td><td data-label="Description">${des}</td><td data-label="Location">${loc}</td><td data-label="Location Description">${loc_des}</td><td data-label="Date">${dat}</td></tr>`;
            }

            oStr += `</tbody>`;
            oStr += `</table>`;
            id.innerHTML = oStr;
        },
        error : function( xhr, status, error ) {
            alert("Error");
            console.log(`AJAX ERROR - LOADING RECORDS`);
            console.log(error)
        }
    });

    $('#search').keyup(function () {
        search_table($(this).val());
    });

});



