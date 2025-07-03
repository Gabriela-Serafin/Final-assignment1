// JavaScript source code

function validateForm(event){
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();
    const message= document.getElementById('message');

    message.textContent = "";
    message.style.color = "red";


    if (name === "" || email === "" || age === "") {
       message.textContent = " All information is required";
       return "";
    }

    age = Number(age);
    if (isNaN(age) || age <= 0){
        message.textContent = "Age must be higher than 0!";
        return;
    }

    if (age <= 18){
        message.textContent = "You must be over 18 years old.";
        return;
    }
 
    if(!email.includes("@")){
        message.textContent = "Provide valid email!";
        return;
    }

    const  person = {name, email, age};
    addPersonToList(person);


    message.style.color = "green";
    message.textConent = "Submitted";

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
}

function addPersonToList(person) {
    const container = document.getElementById("people-list");

    const personInfo = document.createElement("li");
    personInfo.textContent = `Name: ${person.name}, Email: ${person.email}, Age: ${person.age}`;

    container.appendChild(personInfo);
}
