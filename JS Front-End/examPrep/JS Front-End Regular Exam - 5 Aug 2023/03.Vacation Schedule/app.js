
const baseURL = 'http://localhost:3030/jsonstore/tasks/';

const loadBtn = document.getElementById('load-vacations');
const vacationList = document.getElementById('list');
const formElement = document.querySelector('#form form');
const nameInput = document.getElementById('name');
const durationInput = document.getElementById('num-days');
const formDateInput = document.getElementById('from-date');
const formAddBtn = document.getElementById('add-vacation');
const formEditBtn = document.getElementById('edit-vacation');


loadBtn.addEventListener('click', loadVacations);

formAddBtn.addEventListener('click', (e) => {
    const newVacation = {
        name: nameInput.value,
        days: durationInput.value,
        date: formDateInput.value
    };

    fetch(baseURL, {
        method: 'POST',
        headers: { // Corrected the typo here
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVacation)
    }).then(loadVacations)
        .then(clearForm());

});

formEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const vacationId = formEditBtn.dataset.vacationId; // Access vacation ID from formEditBtnugger;
    const vacationData = {
        _id: vacationId,
        name: nameInput.value,
        days: durationInput.value,
        date: formDateInput.value
    };
    console.log(vacationId);

    fetch(`${baseURL}${vacationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vacationData)
    })
        .then(loadVacations)
        .then(() => {

            clearForm();
            formAddBtn.removeAttribute('disabled');
            formEditBtn.setAttribute('disabled', 'disabled');
            delete formEditBtn.dataset.vacationId; // Remove the vacation ID from the dataset
        })




})

function clearForm() {
    nameInput.value = '';
    durationInput.value = ''; // Use durationInput instead of numDaysInput
    formDateInput.value = '';
};

function renderVacations(vacations) {
    vacationList.innerHTML = '';
    vacations.map(vacation => renderVacation(vacation))
        .forEach(vacationElement => vacationList.appendChild(vacationElement));
}


function renderVacation(vacation) {


    const container = document.createElement('div');
    container.className = ('container');

    const h2userName = document.createElement('h2');
    h2userName.textContent = vacation.name;

    const h3date = document.createElement('h3');
    h3date.textContent = vacation.date;

    const h3duration = document.createElement('h3');
    h3duration.textContent = vacation.days;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => {


        nameInput.value = vacation.name;
        durationInput.value = vacation.days; // Corrected variable name
        formDateInput.value = vacation.date;

        container.remove();
        formAddBtn.setAttribute('disabled', 'disabled');
        formEditBtn.removeAttribute('disabled');


        formEditBtn.dataset.vacationId = vacation._id;

    });

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';

    doneBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        fetch(`${baseURL}${vacation._id}`, { // Corrected to use backticks and template literals
            method: 'DELETE'
        }).then(loadVacations);
    });

    container.appendChild(h2userName);
    container.appendChild(h3date);
    container.appendChild(h3duration);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    return container;

}

function loadVacations() {

    return fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            const vacations = Object.values(result); // Convert result to an array of values
            renderVacations(vacations); // Pass this array to renderVacations
        });
}








