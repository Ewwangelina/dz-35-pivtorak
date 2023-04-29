const form = document.querySelector('#registration-form');
const tableContainer = document.querySelector('#table-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.elements['first-name'].value;
    const lastName = form.elements['last-name'].value;
    const birthdate = form.elements['birthdate'].value;
    const gender = form.elements['gender'].value;
    const city = form.elements['city'].value;
    const address = form.elements['address'].value;
    const languages = [];
    form.querySelectorAll('input[name="languages"]:checked').forEach((checkbox) => {
        languages.push(checkbox.value);
    });

    const table = document.createElement('table');
    const row1 = table.insertRow();
    const row2 = table.insertRow();
    const row3 = table.insertRow();
    const row4 = table.insertRow();
    const row5 = table.insertRow();
    const row6 = table.insertRow();
    const row7 = table.insertRow();
    const cell11 = row1.insertCell();
    const cell12 = row1.insertCell();
    const cell21 = row2.insertCell();
    const cell22 = row2.insertCell();
    const cell31 = row3.insertCell();
    const cell32 = row3.insertCell();
    const cell41 = row4.insertCell();
    const cell42 = row4.insertCell();
    const cell51 = row5.insertCell();
    const cell52 = row5.insertCell();
    const cell61 = row6.insertCell();
    const cell62 = row6.insertCell();
    const cell71 = row7.insertCell();
    const cell72 = row7.insertCell();
    cell11.textContent = 'Имя:';
    cell12.textContent = firstName;
    cell21.textContent = 'Фамилия:';
    cell22.textContent = lastName;
    cell31.textContent = 'Дата рождения:';
    cell32.textContent = birthdate;
    cell41.textContent = 'Пол:';
    cell42.textContent = gender === 'male' ? 'Мужской' : 'Женский';
    cell51.textContent = 'Город:';
    cell52.textContent = city;
    cell61.textContent = 'Адрес:';
    cell62.textContent = address;
    cell71.textContent = 'Языки, которыми владеет:';
    cell72.textContent = languages.join(', ');

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});

