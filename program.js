/* continents = [
    {nom: 'Afrique', population: 1340},
    {nom: 'Amérique', population: 800}, 
    {nom: 'Asie', population: 4641}, 
    {nom: 'Europe', population: 747}, 
    {nom: 'Océanie', population: 42}, 
]
population = 0;
continents.forEach(element =>{
    
    console.log(element.nom);
    population += element.population;
})

console.log("La population mondiale s'élève à " + population + " Mhabs");
*/

var fs = require("fs");
var test = fs.readFileSync("data.json","utf8");
var data = JSON.parse(test);

const table = require("table");
let output = table.table(data);

var figlet = require('figlet');
figlet('Démographie', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    console.log(output);
});


