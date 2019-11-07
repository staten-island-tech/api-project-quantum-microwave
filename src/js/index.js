
const AvengerStrings = {
    input: document.getElementById('avenger-form'), //comma because its an object
    inputName: document.getElementById('search-term'),
    displayName: document.querySelector('.marvel-name'),
    displayDescription: document.querySelector('.marvel-description'),
    displayThumbnail: document.querySelector('.display-thumbnail')
}

function getData(){
    AvengerStrings.input.addEventListener('submit', async function(e){
        e.preventDefault();
        const result = await fetch( //await will return a promise
            `https://gateway.marvel.com:443/v1/public/characters?name=${AvengerStrings.inputName.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
            );
            const data = await result.json();
            console.log(data.data)

            const displayThing = function(data){
                AvengerStrings.displayName.innerText = data.data.results[0].name;
                AvengerStrings.displayDescription.innerText = data.data.results[0].description;
                AvengerStrings.displayThumbnail.src = data.data.results[0].thumbnail.path + '/standard_amazing.jpg';
            };
            displayThing(data);
    })
}
getData();

//user inputs wrong thing, display error
//clear field once thing is displayed
//display more images
//press enter and it displays
