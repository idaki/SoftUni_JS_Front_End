window.addEventListener("load", solve);

function solve() {
    let expenseElement = document.getElementById('expense');
    let amountElement = document.getElementById('amount');
    let dateElement = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let ulPreview = document.getElementById('preview-list');
    let ulExpensesList = document.getElementById('expenses-list');
    let deleteBtn = document.querySelector('.delete');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let type = expenseElement.value;
        let amount = amountElement.value;
        let date = dateElement.value;

        if (!type || !amount || !date) {
            return; 
        }

        let liExpenseItem = document.createElement('li');
        liExpenseItem.className = 'expense-item';

        let article = document.createElement('article');

        let pType = document.createElement('p');
        pType.textContent = `Type: ${type}`;

        let pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amount}$`; 

        let pDate = document.createElement('p');
        pDate.textContent = `Date: ${date}`;

        let divBtn = document.createElement('div');
        divBtn.className = 'buttons';

        let editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', () => {
            expenseElement.value = type;
            amountElement.value = amount;
            dateElement.value = date;
            liExpenseItem.remove();
            addBtn.disabled = false;
        });

        let okBtn = document.createElement('button');
        okBtn.className = 'btn ok';
        okBtn.textContent = 'ok';
        okBtn.addEventListener('click', () => {
            ulExpensesList.appendChild(liExpenseItem);
            divBtn.remove();
            addBtn.disabled = false;
        });

        article.appendChild(pType);
        article.appendChild(pAmount);
        article.appendChild(pDate);

        divBtn.appendChild(editBtn);
        divBtn.appendChild(okBtn);

        liExpenseItem.appendChild(article);
        liExpenseItem.appendChild(divBtn);

        ulPreview.appendChild(liExpenseItem);

        clearForm();
        addBtn.disabled = true;
    });

    deleteBtn.addEventListener('click', () => {
        window.location.reload();
    });

    function clearForm() {
        expenseElement.value = '';
        amountElement.value = '';
        dateElement.value = '';
    }
}