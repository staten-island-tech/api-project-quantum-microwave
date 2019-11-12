import {AvengerStrings} from './avengerstrings.js'

AvengerStrings.input.addEventListener("keypress", function(e){
    if (event.keyCode === 13){
        e.preventDefault();
        document.querySelector('.nes-btn').click();
    }
});

function getData(){
    AvengerStrings.input.addEventListener('submit', async function(e){
        e.preventDefault();
        try{
            const result = await fetch( //await will return a promise
                `https://gateway.marvel.com:443/v1/public/characters?name=${AvengerStrings.inputName.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
                );
                const data = await result.json();
                //console.log(data.data)

            const result_comics = await fetch(
                `https://gateway.marvel.com:443/v1/public/comics?title=${AvengerStrings.inputName.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
                );
                 const data_comics = await result_comics.json();
                 //console.log(data_comics.data);
    
                const displayThing = function(data){
                    AvengerStrings.displayName.innerText = data.data.results[0].name;
                    AvengerStrings.displayDescription.innerText = data.data.results[0].description;
                    AvengerStrings.displayThumbnail.src = data.data.results[0].thumbnail.path + '/standard_amazing.jpg';
                    AvengerStrings.displayImageOne.src = data_comics.data.results[2].images[0].path + '/standard_amazing.jpg';
                    AvengerStrings.displayImageTwo.src = data_comics.data.results[3].images[0].path + '/standard_amazing.jpg';
                    AvengerStrings.displayImageThree.src = data_comics.data.results[4].images[0].path + '/standard_amazing.jpg';
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
            invalid();
            AvengerStrings.inputName.value = '';
        }
    })
}
getData();