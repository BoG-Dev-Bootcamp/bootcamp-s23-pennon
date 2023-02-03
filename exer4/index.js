import figlet from "figlet";
const {textSync} = figlet;
import axios from "axios";

axios.get("https://pokeapi.co/api/v2/pokemon/" + String((Math.round(Math.random() * 1008))))
    .then(function (response) {
        let name = response.data.name;
        console.log(figlet.textSync(name, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 150,
            whitespaceBreak: true
        }));
    })
    .catch(function (error) {
        console.log(error);
    })

