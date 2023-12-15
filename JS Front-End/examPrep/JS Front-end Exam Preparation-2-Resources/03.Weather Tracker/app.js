// function solve() {
//     const baseURL = 'http://localhost:3030/jsonstore/tasks/';

//     const createElement = (tag, content = '', classes = [], id = '', listener = '') => {
//         const element = document.createElement(tag);

//         if (content) {
//             element.textContent = content; // Fixed from 'content' to 'textContent'
//         }

//         if (classes.length) {
//             element.classList.add(...classes);
//         }

//         if (id) {
//             element.id = id;
//         }

//         if (listener) {
//             element.addEventListener('click', listener); // Fixed from 'addEventLister' to 'addEventListener'
//         }
//         return element;
//     }

//     const buttonHandler = (e) => { // Corrected spelling from 'buttenHandler' to 'buttonHandler'
//         const operations = {
//             "Add Weather": addWeather,
//             "Edit Weather": editWeather, // Fixed spelling from 'Edi tWeather' to 'Edit Weather'
//             "Load History": loadHistory,
//             "Change Weather": changeWeather,
//             "Delete Weather": deleteWeather,
//         };

//         operations[e.target.textContent](e); // Fixed from 'operetions' to 'operations'
//     }

//     const changeWeather = (e) => {
//         const mainDiv = e.target.parentElement.parentElement;
//         editID = mainDiv.id;

//         const location = mainDiv.querySelector('h2').textContent;
//         const [date, temp] = mainDiv.querySelector('h3'); // Fixed the destructuring

//         fields.location.value = location;
//         fields.date.value = date.textContent;
//         fields.temp.value = temp.textContent;

//         editWeatherBtn.disabled = false;
//         addWeatherBtn.disabled = true;
//         mainDiv.remove();
//     }

//     const createNewWeather = () => {
//         const newWeather = {};

//         for (const [key, value] of Object.entries(fields)) { // Fixed from 'Object.entries[fields]' to 'Object.entries(fields)'
//             newWeather[key] = value.value;
//         }
//         return newWeather; // Added return statement
//     }

//     const addWeather = (e)=>{
//         fetch(baseURL,{
//             method:'POST',
//             body:JSON.stringify(createNewWeather())
//         }).then(()=>{

//         })
//     }

//     const loadHistory =(e)=>{
//         fetch(baseURL)
//         .then(res => res.json())
//         .then(data=>{
//             listContainer.innerHTML='';
//             Object.values[data].forEach(element => {
//                 const containerDiv = createElement('div','',['container'], id = item._id);
//             containerDiv.appendChild(createElement('h2',item.location));
//             containerDiv.appendChild(createElement('h2',item.date));
//             containerDiv.appendChild(createElement('h2',item.temp,[],'celsius'));
            
//             const btnContainer = createElement('div','',["buttons-contianer"]);           
          
//             btnContainer.appendChild(createElement('button','Change',[''],'',buttonHandler));
//             btnContainer.appendChild(createElement('button','Delte',[''],'',buttonHandler));
//             containerDiv.appendChild(btnContainer);
//             listContainer.appendChild(containerDiv);
//         });
//         })
//     }

//     const editWeather = (e) => {
//         fetch(`${baseURL}${editID}`, {
//             method: "PUT",
//             body: JSON.stringify(createNewWeather())
//         })
//             .then(() => {
//                 editWeatherBtn.disabled = true;
//                 addWeatherBtn.disabled = false;
//             })
//     }

//     let editID = ''; // Initialized editID

//     const fields = {
//         location: document.getElementById('location'),
//         temp: document.getElementById('temp'),
//         date: document.getElementById('date'),
//     };

//     const loadbtn = document.getElementById('load-history');
//     loadbtn.addEventListener('click', buttonHandler); // Corrected to 'buttonHandler'

//     const addWeatherBtn = document.getElementById('add-weather');
//     addWeatherBtn.addEventListener('click', buttonHandler); // Corrected to 'buttonHandler'

//     const editWeatherBtn = document.getElementById('edit-weather');
//     editWeatherBtn.addEventListener('click', buttonHandler); // Corrected to 'buttonHandler'

//     const listContainer = document.getElementById('list');
// }

// const deleteWeather = (e)=>{
//     editID= e.target.parentElement.parentElement;
//     fetch(`${baseURL}${editID}`,{
//         method: DELETE,   
//     }).then(()=>{
// loadHistory()
//     })
// }

// solve();
function solve() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks/';

    const createElement = (tag, content = '', classes = [], id = '', listener = '') => {
        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        }

        if (classes.length) {
            element.classList.add(...classes);
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener('click', listener);
        }
        return element;
    }

    const buttonHandler = (e) => {
        const operations = {
            "Add Weather": addWeather,
            "Edit Weather": editWeather,
            "Load History": loadHistory,
            "Change Weather": changeWeather,
            "Delete Weather": deleteWeather,
        };

        operations[e.target.textContent](e);
    }

    const changeWeather = (e) => {
        const mainDiv = e.target.parentElement.parentElement;
        editID = mainDiv.id;

        const location = mainDiv.querySelector('h2').textContent;
        const [date, temp] = mainDiv.querySelectorAll('h3');

        fields.location.value = location;
        fields.date.value = date.textContent;
        fields.temp.value = temp.textContent;

        editWeatherBtn.disabled = false;
        addWeatherBtn.disabled = true;
        mainDiv.remove();
    }

    const createNewWeather = () => {
        const newWeather = {};

        for (const [key, value] of Object.entries(fields)) {
            newWeather[key] = value.value;
        }
        return newWeather;
    }

    const addWeather = (e) => {
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(createNewWeather())
        }).then(() => {
            // Handle the response (e.g., reload the list)
        });
    }

    const loadHistory = (e) => {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                listContainer.innerHTML = '';
                Object.values(data).forEach(item => {
                    const containerDiv = createElement('div', '', ['container'], item._id);
                    containerDiv.appendChild(createElement('h2', item.location));
                    containerDiv.appendChild(createElement('h3', item.date));
                    containerDiv.appendChild(createElement('h3', item.temp, [], 'celsius'));
            
                    const btnContainer = createElement('div', '', ["buttons-container"]);           
                    btnContainer.appendChild(createElement('button', 'Change', [], '', buttonHandler));
                    btnContainer.appendChild(createElement('button', 'Delete', [], '', buttonHandler));
                    containerDiv.appendChild(btnContainer);
                    listContainer.appendChild(containerDiv);
                });
            });
    }

    const editWeather = (e) => {
        fetch(`${baseURL}${editID}`, {
            method: "PUT",
            body: JSON.stringify(createNewWeather())
        })
            .then(() => {
                editWeatherBtn.disabled = true;
                addWeatherBtn.disabled = false;
            })
    }

    const deleteWeather = (e) => {
        const deleteID = e.target.parentElement.parentElement.id;
        fetch(`${baseURL}${deleteID}`, {
            method: 'DELETE'
        }).then(() => {
            loadHistory();
        });
    }

    let editID = '';

    const fields = {
        location: document.getElementById('location'),
        temp: document.getElementById('temp'),
        date: document.getElementById('date'),
    };

    const loadbtn = document.getElementById('load-history');
    loadbtn.addEventListener('click', loadHistory);

    const addWeatherBtn = document.getElementById('add-weather');
    addWeatherBtn.addEventListener('click', addWeather);

    const editWeatherBtn = document.getElementById('edit-weather');
    editWeatherBtn.addEventListener('click', editWeather);

    const listContainer = document.getElementById('list');
}

solve();
