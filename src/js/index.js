const AvengerStrings = {
    input: document.querySelector('.search'),
    displayName: document.querySelector('.display-api-name')
}

//figure out which divs are to be changed

function getMarvel(){
    AvengerStrings.input.addEventListener('.searchTerm', async function(e){
        e.preventDefault();
        console.log('event fire?');

      /*   const result = await fetch( //await will return a promise
            `http://gateway.marvel.com/v1/public/characters?name=captain%20america&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
            );
            const data = await result.json();
            console.log(data.data); */
    }) 
}

getMarvel();