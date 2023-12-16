
const baseURL = 'http://localhost:3030/jsonstore/tasks/';


const loadMealsBtn = document.getElementById('load-meals');
const mealsList = document.getElementById('list');
const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');
const formAddBtn = document.getElementById('add-meal');
const formEditBtn = document.getElementById('edit-meal');


loadMealsBtn.addEventListener('click', loadMeals);
formAddBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addMeal();
});
formEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editMeal(formEditBtn.dataset.mealId);
});


function loadMeals() {
    fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            const meals = Object.values(result);
            renderMeals(meals);
        });
}


function addMeal() {
    const newMeal = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMeal)
    })
    .then(loadMeals)
    .then(clearForm);
}


function editMeal(mealId) {
    const updatedMeal = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    fetch(`${baseURL}${mealId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMeal)
    })
    .then(loadMeals)
    .then(() => {
        clearForm();
        formAddBtn.removeAttribute('disabled');
        formEditBtn.setAttribute('disabled', 'disabled');
        delete formEditBtn.dataset.mealId;
    });
}


function deleteMeal(mealId) {
    fetch(`${baseURL}${mealId}`, { method: 'DELETE' })
        .then(loadMeals);
}


function clearForm() {
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
}

// Render Meals
function renderMeals(meals) {
    mealsList.innerHTML = '';
    meals.forEach(meal => {
        mealsList.appendChild(renderMeal(meal));
    });
}


function renderMeal(meal) {
    const container = document.createElement('div');
    container.className = 'meal';

    const h2Food = document.createElement('h2');
    h2Food.textContent = meal.food;

    const h3Time = document.createElement('h3');
    h3Time.textContent = meal.time;

    const h3Calories = document.createElement('h3');
    h3Calories.textContent = `${meal.calories}`;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'meal-buttons';

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-meal';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;
        formEditBtn.dataset.mealId = meal._id;
        formAddBtn.setAttribute('disabled', 'disabled');
        formEditBtn.removeAttribute('disabled');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-meal';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteMeal(meal._id));

    buttonsDiv.appendChild(changeBtn);
    buttonsDiv.appendChild(deleteBtn);

    container.appendChild(h2Food);
    container.appendChild(h3Time);
    container.appendChild(h3Calories);
    container.appendChild(buttonsDiv);

    return container;
}
