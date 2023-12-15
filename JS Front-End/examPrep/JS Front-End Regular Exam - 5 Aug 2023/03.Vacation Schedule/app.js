document.getElementById('add-vacation').addEventListener('click', function(event){
    event.preventDefault();

    // Get values from the form
    var name = document.getElementById('name').value;
    var numDays = document.getElementById('num-days').value;
    var fromDate = document.getElementById('from-date').value;

    // Create vacation object
    var vacation = {
        name: name,
        numDays: numDays,
        fromDate: fromDate
    };

    // Send POST request to server
    fetch('/addVacation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vacation),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Here you can add code to update the UI
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
