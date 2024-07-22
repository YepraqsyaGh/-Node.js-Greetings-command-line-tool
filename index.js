const { Command } = require('commander');
const moment = require('moment');

const program = new Command();

const languages = {
    english: {
        greet: "Hello",
        guest: "guest",
    },
    spanish: {
        greet: "Hola",
        guest: "invitado"
    },
    french: {
        greet: "Bonjour",
        guest: "invité"
    },
    german: {
        greet: "Hallo",
        guest: "Gast"
    },
    italian: {
        greet: "Ciao",
        guest: "ospite"
    },
    portuguese: {
        greet: "Olá",
        guest: "convidado"
    },
    russian: {
        greet: "Привет",
        guest: "гость"
    },
    armenian: {
        greet: "Բարև",
        guest: "հյուր"
    },
}

const getLanguage = (value) => {    
    if(value && languages[value]) return languages[value]

    return languages.english
}

const getLevel = (level, name, language) => {
    const lang = getLanguage(language); 

    const newName = name ||  lang?.guest;
    const date = moment().format('YYYY-MM-DD HH:mm:ss');

        if (level == 1) {
            return newName;
        }
        
        if (level == 2) {
            return `${newName} (Date and Time: ${date})`;
        }   

    return name || "";
};

const getGreeting = (greeting, level, name, language) => {
    const lang = getLanguage(language); 

    if (!greeting) return lang?.greet + " " +  getLevel(level, name, language)

    return greeting + " " + getLevel(level, name, language)
}

program
    .option('-n, --name [value]')
    .option('-lvl, --level [value]')
    .option('-g, --greeting [value]')
    .option('-l, --language [value]');

program.parse();

const options = program.opts();

console.log(getGreeting(options.greeting, options.level, options.name, options.language))
