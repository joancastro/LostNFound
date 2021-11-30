scrollingElement = (document.scrollingElement || document.body)

function scrollSmoothToBottom (id) {
    $(scrollingElement).animate({
        scrollTop: document.body.scrollHeight
    }, 500);
}

function updateIt(id, item, description, location, location_description, date, adminID, witness, auID, phone )
{
    scrollSmoothToBottom(document.getElementById("#results"));

    let str = `<h1 class="heading-update">Update Record: ${id}</h1>`;
    str += "<table class='styled-table'> ";
    str += `<thead>`;
    str += `<tr><th>Item</th><th>Description</th><th>Location</th><th>Location Description</th><th>Date</th><th>Admin ID</th><th>Witness Name</th><th>AU ID</th><th>Phone Number</th><th>Update</th></tr>`;
    str += `</thead>`;
    str += `<tbody>`;

    str += `<tr><td><input type='text' name='item' id='item' value='${item}'></td>`;
    str += `<td><input class='long' type='text' name='description' id='description' value='${description}'></td>`;
    str += `<td><input type='text' name='location' id='location' value='${location}'></td>`;
    str += `<td><input type='text' name='location_description' id='location_description' value='${location_description}'></td>`;
    str += `<td><input type='text' name='date' id='date' value='${date}'></td>`;
    str += `<td><input type='text' name='adminID' id='adminID' value='${adminID}'></td>`;
    str += `<td><input type='text' name='witness' id='witness' value='${witness}'></td>`;
    str += `<td><input type='text' name='auID' id='auID' value='${auID}'></td>`;
    str += `<td><input type='text' name='phone' id='phone' value='${phone}'></td>`;
    str += `<td data-label="Update"><a href="#" class="btn" onClick="sendTheUpdate(${id})">Update ${id}</a></td></tr>`;

    str += `</tbody>`;
    str += `</table>`;

    $("#results").html(str);
}

function sendTheUpdate(id)
{
    let item = $("#item").val();
    let description = $("#description").val();
    let location = $("#location").val();
    let location_description = $("#location_description").val();
    let date = $("#date").val();
    let adminID = $("#adminID").val();
    let witness = $("#witness").val();
    let auID = $("#auID").val();
    let phone = $("#phone").val();

    let URL = `http://127.0.0.1:3000/records/${id}`;

    let d = {
        item : `${item}` ,
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
        url : URL,
        contentType : 'application/json',
        type : 'PUT',
        data : JSON.stringify(d),
        success : function(data) {
            console.log(`Update Success`);
            console.log(data);
            window.location.reload();
        },
        error : function(xhr, status, error) {
            alert("Error");
            console.log(`AJAX ERROR - UPDATE`);
            console.log(error);
        }
    })
}

function claimIt(id, item , description, location, location_description, date, adminID, witness, auID, phone) {

    scrollSmoothToBottom(document.getElementById("#results"));

    let str = `<h1 class="heading-update">Claim Record: ${id}</h1>`;
    str += "<table class='styled-table'> ";
    str += `<thead>`;
    str += `<tr><th>Claimant Name</th><th>AU ID</th><th>Phone Number</th><th>Claim</th></tr>`;
    str += `</thead>`;
    str += `<tbody>`;

    str += `<td><input type='text' name='claimName' id='claimName'></td>`;
    str += `<td><input type='text' name='claimAUID' id='claimAUID'></td>`;
    str += `<td><input type='text' name='claimPhone' id='claimPhone'></td>`;
    str += `<td data-label="Claim"><a href="#" class="btn" onclick="sendClaim('${id}', '${item}', '${description}', '${location}', '${location_description}', '${date}', '${adminID}', '${witness}', '${auID}', '${phone}')">Claim ${id}</a></td></tr>`;

    str += `</tbody>`;
    str += `</table>`;

    $("#results").html(str);

}

function sendClaim(id, item , description, location, location_description, date, adminID, witness, auID, phone) {

    //alert("sendClaim() working")

    let claimName = $("#claimName").val();
    let claimAUID = $("#claimAUID").val();
    let claimPhone = $("#claimPhone").val();

    let URL = `http://127.0.0.1:3000/claimedRecords`;

    let d = {
        item : `${item}`,
        description : `${description}`,
        location : `${location}`,
        location_description : `${location_description}`,
        date : `${date}`,
        adminID : `${adminID}`,
        witness : `${witness}`,
        auID : `${auID}`,
        phone : `${phone}`,
        claimName : `${claimName}`,
        claimAUID : `${claimAUID}`,
        claimPhone : `${claimPhone}`
    };

    $.ajax({
        url: URL,
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify(d),
        success: function (data) {
            console.log(`Insertion Success`);
            console.log(data);
            deleteIt(id);
        },
        error: function (xhr, status, error) {
            alert("Error");
            console.log(`AJAX ERROR - INSERTION`);
            console.log(error);
        }
    })


}


function deleteIt(id) {
    let URL = `http://127.0.0.1:3000/records/${id}`;

    $.ajax ({
        url : URL,
        contentType : 'application/json',
        type : "DELETE",
        success : function(data) {
            console.log(`Deletion Success`);
            console.log(data);
            window.location.reload();
        },
        error : function (xhr, status, error) {
            alert("Error");
            console.log(`AJAX ERROR - DELETE`);
            console.log(error)
        }
    })
}

$(document).ready(function () {

    let id = document.getElementById("recordArea");
    let URL ="http://127.0.0.1:3000/records";

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
            oStr += `<tr><th>#</th><th>Item</th><th>Description</th><th>Location</th><th>Location Description</th><th>Date</th><th>Admin ID</th><th>Witness Name</th><th>AU ID</th><th>Phone Number</th><th>Claim</th><th>Update</th></tr>`;
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

                oStr += `<tr><td data-label="#">${ti}</td><td data-label="Item">${ite}</td><td data-label="Description">${des}</td><td data-label="Location">${loc}</td><td data-label="Location Desciption">${loc_des}</td><td data-label="Date">${dat}</td><td data-label="Admin ID">${adm}</td><td data-label="Witness Name">${wit}</td><td data-label="AU ID">${aui}</td><td data-label="Phone Number">${pho}</td>`;
                oStr += `<td data-label="Claim"><a href="#" class="btn" onclick="claimIt('${ti}', '${ite}', '${des}', '${loc}', '${loc_des}', '${dat}', '${adm}', '${wit}', '${aui}', '${pho}')">Claim ${ti}</a></td>`;
                oStr += `<td data-label="Update"><a href="#" class="btn" onclick="updateIt('${ti}', '${ite}', '${des}', '${loc}', '${loc_des}', '${dat}', '${adm}', '${wit}', '${aui}', '${pho}')">Update ${ti}</a></td></tr>`;
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