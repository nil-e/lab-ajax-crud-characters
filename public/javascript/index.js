const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    return charactersAPI
      .getFullList("characters/list")
      .then((abc) => {
        let charList = abc.data;
      document.getElementById("characters-container").innerHTML = "";
      charList.forEach(element => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id",`${element.id}`);
        newDiv.setAttribute("class","character-info");
        let name = document.createElement("div");
        name.setAttribute("class","name");
        name.innerText=`Character Name: `;
        let dynamicName = document.createElement("div");
        dynamicName.innerText=`${element.name}`;
        dynamicName.style.color = "yellow";
        dynamicName.style.display = "inline";
        name.appendChild(dynamicName);

        let occupation = document.createElement("div");
        occupation.setAttribute("class","occupation");
        occupation.innerText=`Character Occupation: `;
        let dynamicOccupation = document.createElement("div");
        dynamicOccupation.innerText=`${element.occupation}`;
        dynamicOccupation.style.color = "yellow";
        dynamicOccupation.style.display = "inline";
        occupation.appendChild(dynamicOccupation);

        let cartoon = document.createElement("div");
        cartoon.setAttribute("class","cartoon");
        cartoon.innerText=`Is a Cartoon? `;
        let dynamicCartoon = document.createElement("div");
        dynamicCartoon.innerText=`${element.cartoon}`;
        dynamicCartoon.style.color = "yellow";
        dynamicCartoon.style.display = "inline";
        cartoon.appendChild(dynamicCartoon);

        let weapon = document.createElement("div");
        weapon.setAttribute("class","weapon");
        weapon.innerText=`Character Weapon: `;
        let dynamicWeapon = document.createElement("div");
        dynamicWeapon.innerText=`${element.weapon}`;
        dynamicWeapon.style.color = "yellow";
        dynamicWeapon.style.display = "inline";
        weapon.appendChild(dynamicWeapon);

        newDiv.appendChild(name);
        newDiv.appendChild(occupation);
        newDiv.appendChild(cartoon);
        newDiv.appendChild(weapon);
        document.getElementById("characters-container").appendChild(newDiv);
      });
      })
      .catch((error) => {console.log("error",error)});
  });
});

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterid = document.getElementById('charId').value;
  return charactersAPI
    .getOneRegister(characterid)
    .then((abc) => {
    document.getElementById("characters-container").innerHTML = "";

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id",`${abc.data.id}`);
    newDiv.setAttribute("class","character-info");
    let name = document.createElement("div");
    name.setAttribute("class","name");
    name.innerText=`Character Name: `;
    let dynamicName = document.createElement("div");
    dynamicName.innerText=`${abc.data.name}`;
    dynamicName.style.color = "yellow";
    dynamicName.style.display = "inline";
    name.appendChild(dynamicName);

    let occupation = document.createElement("div");
    occupation.setAttribute("class","occupation");
    occupation.innerText=`Character Occupation: `;
    let dynamicOccupation = document.createElement("div");
    dynamicOccupation.innerText=`${abc.data.occupation}`;
    dynamicOccupation.style.color = "yellow";
    dynamicOccupation.style.display = "inline";
    occupation.appendChild(dynamicOccupation);

    let cartoon = document.createElement("div");
    cartoon.setAttribute("class","cartoon");
    cartoon.innerText=`Is a Cartoon? `;
    let dynamicCartoon = document.createElement("div");
    dynamicCartoon.innerText=`${abc.data.cartoon}`;
    dynamicCartoon.style.color = "yellow";
    dynamicCartoon.style.display = "inline";
    cartoon.appendChild(dynamicCartoon);

    let weapon = document.createElement("div");
    weapon.setAttribute("class","weapon");
    weapon.innerText=`Character Weapon: `;
    let dynamicWeapon = document.createElement("div");
    dynamicWeapon.innerText=`${abc.data.weapon}`;
    dynamicWeapon.style.color = "yellow";
    dynamicWeapon.style.display = "inline";
    weapon.appendChild(dynamicWeapon);

    newDiv.appendChild(name);
    newDiv.appendChild(occupation);
    newDiv.appendChild(cartoon);
    newDiv.appendChild(weapon);
    document.getElementById("characters-container").appendChild(newDiv);
    })
    .catch((error) => {console.log("error",error)});
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterid = document.getElementById('character-id-delete').value;
  return charactersAPI
    .deleteOneRegister(characterid)
    .then(() => {
      document.getElementById("delete-one").style.backgroundColor = "green";
    })
    .catch((error) => {
      document.getElementById("delete-one").style.backgroundColor = "red";
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    let name = document.querySelector('#edit-character-form input[name="name"]').value;
    let occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    let cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;
    let weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    let updatedChar = {name, occupation, weapon, cartoon };
    return charactersAPI
    .updateOneRegister(id,updatedChar)
    .then(() => {
      document.getElementById("send-data").style.backgroundColor = "green";
    })
    .catch((error) => {
      document.getElementById("send-data").style.backgroundColor = "red";
    });
  });

  

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.querySelector('#new-character-form input[name="name"]').value;
    let occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    let cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;
    let weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    let newChar = { name, occupation, weapon, cartoon };
    return charactersAPI
    .createOneRegister(newChar)
    .then(() => {
      document.getElementById("create-data").style.backgroundColor = "green";
    })
    .catch((error) => {
      document.getElementById("create-data").style.backgroundColor = "red";
    });
  });

