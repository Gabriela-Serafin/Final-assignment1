// JavaScript source code

function validateForm(event){
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();
    const hobby = document.getElementById('hobby').value.trim();
    const message = document.getElementById('message');
 

    message.textContent = "";
    message.style.color = "red";


    if (name === "" || email === "" || age === "") {
       message.textContent = " All information are required";
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

    const  person = {name, email, age, hobby};
    addPersonToList(person);


    message.style.color = "green";
    message.textContent = "Submitted";

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('hobby').value = "";
}

function addPersonToList(person) {
    const container = document.getElementById("people-list");

    const personInfo = document.createElement("div");
    personInfo.innerHTML = `<p><strong>Name:</strong> ${person.name}</p><p><strong>Email:</strong> ${person.email}</p><p><strong>Age:</strong> ${person.age}</p><p><strong>Hobby:</strong> ${person.hobby}</p>`;

    container.appendChild(personInfo);
}
