//Knights of Purgatory
//--------------------


const prompt = require("prompt-sync")();

let playerStats = {}; //Initialise player stats object
playerStats.name = "";
playerStats.luck = "";
playerStats.faith = "";
playerStats.strength = "";
playerStats.equipped = "";

function getPlayerStats() { //Get player stats for playerStats object
    logMessages(messagesAct1);
    playerStats.name = prompt("What is your name?: ");
    
}

function logMessages(messages) { //Allow messages to be printed one by one
    function logNextMessage(i) {
        if (i < messages.length) {
            prompt(messages[i]);
            logNextMessage(i + 1);
        }
    }
    logNextMessage(0);
}

const messagesAct1 = [ //Messages to be printed
    "",
    "Message 2",
    "Message 3",
    "Message 4"
];

logMessages(messagesAct1);
getPlayerStats();