
const AvengerStrings = {
    input: document.getElementById('avenger-form'), //comma because its an object
    inputName: document.getElementById('search-term'),
    displayName: document.querySelector('.marvel-name'),
    displayDescription: document.querySelector('.marvel-description'),
    displayThumbnail: document.querySelector('.display-thumbnail'),
    displayImage1: document.querySelector('.display-image-1'),
    displayImage2: document.querySelector('.display-image-2'),
    displayImage3: document.querySelector('.display-image-3')
}

function getData(){
    AvengerStrings.input.addEventListener('submit', async function(e){
        e.preventDefault();
        try{
            const result = await fetch( //await will return a promise
                `https://gateway.marvel.com:443/v1/public/characters?name=${AvengerStrings.inputName.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
                );
                const data = await result.json();
                console.log(data.data)
    
                const displayThing = function(data){
                    AvengerStrings.displayName.innerText = data.data.results[0].name;
                    AvengerStrings.displayDescription.innerText = data.data.results[0].description;
                    AvengerStrings.displayThumbnail.src = data.data.results[0].thumbnail.path + '/standard_amazing.jpg';
                    //AvengerStrings.displayImage1.src = data.data.results[0].images[0];
                    //AvengerStrings.displayImage1.src = data.data.results[0].comics.id.thumbnail.path + '/standard_amazing.jpg';
                };
                displayThing(data);
                AvengerStrings.inputName.value = '';
        }catch(error){
            console.log(error);
            const invalid = function(){
                AvengerStrings.displayName.innerText = 'Error: Marvel Character Does Not Exist!';
                AvengerStrings.displayDescription.innerText = '';
                AvengerStrings.displayThumbnail.src = '';
            };
            displayThing(data);
    })
}
getData();

//user inputs wrong thing, display error
//clear field once thing is displayed
//display more images
