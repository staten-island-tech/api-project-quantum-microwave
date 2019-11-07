//one class to create the object person, album, movie ***Model

//take arguments
class Marvel{
    constructor(name){
        this.name = name;
    }
}

class UI{
    getPkmn(marvel) {
        DOMStrings.input.addEventListener("submit", async function(e) {
          e.preventDefault();
          try {
              const result = await fetch(
                  `https://gateway.marvel.com:443/v1/public/characters?name=${DOMStrings.name.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
                  );
                  const data = await result.json();
                  console.log(data);
               
      
      
            const displayPkmn = function(data) {
              DOMStrings.displayName.innerText = data.data.results[0].name;
              DOMStrings.displayDescrip.innerText = data.data.results[0].description;
              DOMStrings.displayImage.src = data.data.results[0].thumbnail.path +'/detail' + "." + data.data.results[0].thumbnail.extension;
              DOMStrings.type.textContent = data.data.types.map(data => data.data.type.name);
            };
      
            displayPkmn(data);
          } catch (err) {
            console.log(err);
          }
        });
      }
      
      
      
    clearFields(){
        document.getElementById("marvel-name").value = '';
    }
}

document.getElementById('pkmn-form').addEventListener('submit', function(e){
    const name = document.getElementById('marvel-name').value;

    const marvel = new Marvel(name);
    //console.log(movie);

    const ui = new UI();
    //console.log(ui);

    if(name == ''){
        alert("Error: Missing Info")
    }else{
        ui.getPkmn(marvel);
        /* ui.clearFields(); */
    }
    e.preventDefault();
});

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();

    ui.clearFields();

    e.preventDefault();
})



//***View */ class for the UI which contains methods(user interface)
/* class UI{
    
} */
//create/insert the html for the UI DISPLAY 

//clear fields method

//remove something/object


//Controller combines UI and model
//event handler with function
//get values


//instatiate new class/object album with variable name

//instantiate new UI const ui = new UI()


//call relevant methods


//separate event handler for removing/deleting