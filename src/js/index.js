
const DOMStrings = {
    input: document.getElementById("avenger-form"),
    name: document.getElementById("marvel-name"),
    displayName: document.querySelector(".mrvl-name-size"),
    displayImage: document.querySelector(".display-thumbnail"),
    displayDescrip: document.querySelector(".mrvl-descrip"),
    type: document.querySelector(".type")
};

DOMStrings.input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".searchTerm").click();
    }
});

function getAvenger() {
    DOMStrings.input.addEventListener("submit", async function (e) {
        e.preventDefault();
        try {
            const result = await fetch(
                `https://gateway.marvel.com:443/v1/public/characters?name=${DOMStrings.name.value}&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
            );
            const data = await result.json();
            console.log(data);

            const displayAvenger = function (data) {
                DOMStrings.displayName.innerText = data.data.results[0].name;
                DOMStrings.displayDescrip.innerText = data.data.results[0].description;
                DOMStrings.displayImage.src = data.data.results[0].thumbnail.path + '/detail' + "." + data.data.results[0].thumbnail.extension;
                DOMStrings.type.textContent = data.data.types.map(data => data.data.type.name);
            };

            displayAvenger(data);
        } catch (err) {
            console.log(err);
        }
    });
}

getAvenger();
