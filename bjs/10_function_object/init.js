const btnRefresh = document.querySelector('#btnRefresh');
const btnErase = document.querySelector('#btnErase');

btnRefresh.addEventListener('click', () => {
	refresh();
});

btnErase.addEventListener('click', () =>{
	document.querySelector('#firstNameOutput').innerText = "";
    document.querySelector('#surnameOutput').innerText = "";
    document.querySelector('#patronymicOutput').innerText = "";
    document.querySelector('#genderOutput').innerText = "";
    document.querySelector('#birthYearOutput').innerText = "";
    document.querySelector('#professionOutput').innerText = "";
})

window.onload = refresh();

function refresh() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthday;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
};