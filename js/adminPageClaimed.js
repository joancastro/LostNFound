$(document).ready(function () {

    let id = document.getElementById("recordArea");
    let URL ="http://127.0.0.1:3000/claimedRecords";

    $.ajax({
        url: URL,
        headers: {'Access-Control-Allow-Origin':'*'},
        contentType: 'application/json',
        async: true,
        crossDomain : true,
        success : function(data)
        {
            let oStr = "<table class='styled-table'> ";
            oStr += `<thead>`;
            oStr += `<tr><th>#</th><th>Item</th><th>Description</th><th>Location</th><th>Location Description</th><th>Date</th><th>Admin ID</th><th>Witness Name</th><th>AU ID</th><th>Phone Number</th><th>Claimant Name</th><th>Claimant AU ID</th><th>Claimant Phone Number</th></tr>`;
            oStr += `</thead>`;
            oStr += `<tbody>`;

            console.log(`data:`);
            console.log(data);

            for (let i=0; i<data.length; i++) {
                let ti = data[i].id;
                let ite = data[i].item;
                let des = data[i].description;
                let loc = data[i].location;
                let loc_des = data[i].location_description;
                let dat = data[i].date;
                let adm = data[i].adminID;
                let wit = data[i].witness;
                let aui = data[i].auID;
                let pho = data[i].phone;
                let claNa = data[i].claimName;
                let claID = data[i].claimAUID;
                let claPho = data[i].claimPhone;

                oStr += `<tr><td data-label="#">${ti}</td><td data-label="Item">${ite}</td><td data-label="Description">${des}</td><td data-label="Location">${loc}</td><td data-label="Location Desciption">${loc_des}</td><td data-label="Date">${dat}</td><td data-label="Admin ID">${adm}</td><td data-label="Witness Name">${wit}</td><td data-label="AU ID">${aui}</td><td data-label="Phone Number">${pho}</td><td data-label="Claimant Name">${claNa}</td><td data-label="Claimant AU ID">${claID}</td><td data-label="Claimant Phone Number">${claPho}</td>`;
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
});