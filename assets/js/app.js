class Contact {
    constructor(name,surname,phoneNumber){
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
}

class UI{
   addContact(contact){
    // selezioniamo il nostro tbody
    const phoneBook = document.getElementById('my-contact-list');

    // creiamo una nuova riga
    const row = document.createElement('tr');
    row.className = 'contact-info'

    row.innerHTML = 
    `
        <td>${contact.name}</td>
        <td>${contact.surname}</td>
        <td>${contact.phoneNumber}</td>
    `

    // inseriamo la riga
    phoneBook.appendChild(row);
   }

   deleteElement(deleteSelection){
    deleteSelection.remove();
   }
}

// add click button

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addContact);

function addContact(e){
    const name = document.getElementById('contact-name').value.trim();
    const surname = document.getElementById('contact-surname').value.trim();
    const phoneNumber = document.getElementById('contact-phone-number').value.trim();

    const contact = new Contact(name, surname, phoneNumber);

    const ui = new UI;

    ui.addContact(contact);

    document.getElementById('contact-name').value = " ";
    document.getElementById('contact-surname').value = " ";
    document.getElementById('contact-phone-number').value = " ";
}

// remove element

const phoneBook = document.getElementById('my-contact-list');
let deleteSelection;
let isselected = false;

phoneBook.addEventListener('click', selectRemoveItem);

function selectRemoveItem(e){
    if(isselected === false){
        deleteSelection = e.target.parentElement;
        deleteSelection.style.backgroundColor = 'red';
        isselected = true;
    } else {
        deleteSelection.style.backgroundColor = 'beige';
        deleteSelection = " ";
        isselected = false;
    }
   
}

const removeButton = document.getElementById('delete-button');

removeButton.addEventListener('click', removeItem );

function removeItem(e){

    if(deleteSelection === " " || deleteSelection === undefined){
        alert('You must select an element to delete!')
    } else{
        const ui = new UI;
        ui.deleteElement(deleteSelection);
    }
   
}