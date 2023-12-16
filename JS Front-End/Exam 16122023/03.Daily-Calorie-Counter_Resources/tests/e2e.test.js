// Define the base URL for the server
const baseURL = 'http://localhost:3030/jsonstore/tasks/';

// Get DOM elements
const loadMealsBtn = document.getElementById('load-meals');
const mealsList = document.getElementById('list');
const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');
const formAddBtn = document.getElementById('add-meal');
const formEditBtn = document.getElementById('edit-meal');

// Event Listeners
loadMealsBtn.addEventListener('click', loadMeals);

formAddBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addMeal();
});

formEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editMeal(formEditBtn.dataset.mealId);
});

// Load Meals
function loadMeals() {
    fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            const meals = Object.values(result);
            renderMeals(meals);
        });
}

// Add Meal
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

// Edit Meal
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

// Delete Meal
function deleteMeal(mealId) {
    fetch(`${baseURL}${mealId}`, { method: 'DELETE' })
        .then(loadMeals);
}

// Clear Form Fields
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

// Render a Single Meal
function renderMeal(meal) {
    const container = document.createElement('div');
    container.className = 'meal';

    container.innerHTML = `
        <h2>${meal.food}</h2>
        <h3>${meal.time}</h3>
        <h3>${meal.calories} calories</h3>
        <button class="change-meal">Change</button>
        <button class="delete-meal">Delete</button>
    `;

    // Add event listeners for change and delete buttons
    container.querySelector('.change-meal').addEventListener('click', () => {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;
        formEditBtn.dataset.mealId = meal._id;
        formAddBtn.setAttribute('disabled', 'disabled');
        formEditBtn.removeAttribute('disabled');
    });

    container.querySelector('.delete-meal').addEventListener('click', () => deleteMeal(meal._id));

    return container;
}
