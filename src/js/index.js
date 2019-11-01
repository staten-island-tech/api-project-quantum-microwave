/* const AvengerStrings = {
    input: document.getElementById()
}
 */
//figure out which divs are to be changed
/* 
(async function() {
    var response = await fetch(`http://gateway.marvel.com/v1/public/comics?title=spiderman&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`)
    var response = await response.json()
    console.log(response)
})() */

/* console.log(fetch(`http://gateway.marvel.com/v1/public/comics?title=spiderman&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`)); */

async function test(){
    const result = await fetch( //await will return a promise
        `http://gateway.marvel.com/v1/public/comics&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
        );
        const data = await result.json();
        console.log(data);
}

test();