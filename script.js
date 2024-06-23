

// original
/*
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var result = document.getElementById('result');
    if (date && time) {
        result.innerHTML = `You have reserved ${date} ${time} for the event.`;
        alert("大成功\nReservation created successfully."); // 
    } else {
        result.innerHTML = "Please fill in all fields.";
        alert("Please fill in all fields."); //
    }
});
*/
//

// google form

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // create data
    var formData = new FormData();
    formData.append('entry.531488242', date); // get date   
    formData.append('entry.1424967415', time); // get time

    // sent to Google Forms
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSdrvzhsZWGAD3DjkBw3wEems_LJd-BNNTslAU7WCX6CjpFtLg/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' 
    }).then(response => {
        document.getElementById('result').innerHTML = `You have reserved ${date} ${time} for the event.`;
        alert('大成功\nReservation created successfully');
    }).catch(error => {
        document.getElementById('result').innerHTML = "Error in reservation submission.";
        alert('大失败\nFailed to submit reservation');
    });
});
