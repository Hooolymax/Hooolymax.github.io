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
