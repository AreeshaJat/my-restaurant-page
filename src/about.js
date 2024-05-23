function aboutContent() {

    const contentDiv = document.getElementById('content');

    let form = document.createElement("form");

    let contactTitle = document.createElement("h1");
    contactTitle.className = "contactTitle";
    contactTitle.textContent = "CONTACT US";

    var firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.name = 'firstName';
    firstName.placeholder = 'First Name';

    var lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.name = 'lastName';
    lastName.placeholder = 'Last Name';

    var inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = 'userEmail';
    inputEmail.placeholder = 'Email';

    var inputPN = document.createElement('input');
    inputPN.type = 'text';
    inputPN.name = 'userPhoneNumber';
    inputPN.placeholder = 'Phone Number';

    var yourConcern = document.createElement('input');
    yourConcern.type = 'text';
    yourConcern.name = 'concern';
    yourConcern.placeholder = 'Leave us your concerns';

    var buttonSubmit = document.createElement('input');
    buttonSubmit.type = 'submit';
    buttonSubmit.value = 'Submit';

    form.appendChild(contactTitle);
    form.appendChild(firstName);
    form.appendChild(lastName);
    form.appendChild(inputEmail);
    form.appendChild(inputPN);
    form.appendChild(yourConcern);
    form.appendChild(buttonSubmit);
    contentDiv.appendChild(form);
}

export default aboutContent;