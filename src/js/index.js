<<<<<<< Updated upstream
async function test(){
    const result = await fetch( //await will return a promise
        `http://gateway.marvel.com/v1/public/comics?title=spider-man&ts=1&apikey=08bdc0969adbf9a79f5e6592b6980b85&hash=7eaf0892e7f5433321e3642146ee8928`
        );
        const data = await result.json();
        console.log(data.data);
}
test();
=======
/* var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: 'my-public-key'
, privateKey: 'my-private-key'
});

marvel.characters.findAll(function(err, results) {
    if (err) {
      return console.error(err);
    }
   
    console.log(results);
  }); */

 const privateKey = "7fa106a200d24cb0f9d190c0e2b4bb72";
 const publicKey = "dae71ebd702838855c2ef3a7d803bf7b";
 
 
>>>>>>> Stashed changes
