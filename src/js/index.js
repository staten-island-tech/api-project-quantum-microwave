
const DOMStrings = {
    input: document.getElementById('avenger-form'), //comma because its an object
    inputName: document.getElementById('text-area'),
    displayName: document.querySelector('.display-name'),
    displayThumbnail: document.querySelector('.display-thumbnail')
}

function getData(){
    DOMStrings.input.addEventListener('submit', async function(e){
        e.preventDefault();
        const result = await fetch( //await will return a promise
            `https://gateway.marvel.com:443/v1/public/characters?name=${DOMStrings.inputName.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
            );
            const data = await result.json();
            console.log(data.data)

            const displayThing = function(data){
                DOMStrings.displayName.innerText = data.data.results[0].description;
                DOMStrings.displayThumbnail.src = data.data.results[0].thumbnail.path + '/standard_amazing.jpg';
            };
            displayThing(data);
    })
}
getData();
