const lyricsArr = [
  "Creeper",
  " oh man So we back in the mine",
  " got our pick axe swinging from side to side",
  "Side",
  " side to side This task a grueling one",
  " hope to find some diamonds tonight",
  " night",
  " night Diamonds tonight Heads up",
  " you hear a sound",
  " turn around and look up",
  " total shock fills your body",
  "Oh no it's you again",
  "I could never forget those eyes",
  " eyes",
  " eyes",
  "Eyes",
  " eyes",
  " eyes'Cause baby tonight",
  " the creeper's trying to steal all our stuff again",
  "'Cause baby tonight",
  " you grab your pick",
  " shovel and bolt again",
  "And run",
  " run until it's done",
  " done",
  " until the sun comes up in the morn''Cause baby tonight",
  " the creeper's trying to steal all our stuff againJust when you think you're safe",
  " overhear some hissing from right behind",
  "Right",
  " right behindThat's a nice life you have",
  " shame it's gotta end at this time",
  " time",
  " time",
  "Time",
  " time",
  " time",
  " timeBlows up",
  " then your health bar drops",
  " you could use a 1-up",
  " get inside don't be tardy",
  "So now you're stuck in there",
  " half a heart is left but don't die",
  " die",
  " dieDie",
  " die",
  " die",
  " die'Cause baby tonight",
  " the creeper's trying to steal all your stuff again",
  "'Cause baby tonight",
  " you grab your pick",
  " shovel and bolt again",
  "And run",
  " run until it's done",
  " done",
  " until the sun comes up in the morn''Cause baby tonight",
  " the creeper's trying to steal all your stuff again",
  "Creepers",
  " you're mineDig up diamonds",
  " and craft those diamonds and make some armor",
  "Get it baby",
  " go and forge that like you so",
  " MLG pro",
  "The sword's made of diamonds",
  " so come at me broTraining in your room under the torch light",
  "Hone that form to get you ready for the big fight",
  "Every single day and the whole night",
  "Creeper's out prowlin' - alrightLook at me",
  " look at you",
  "Take my revenge that's what I'm gonna do",
  "I'm a warrior baby",
  " what else is new",
  "And my blade's gonna tear through youBring it'Cause baby tonight",
  " the creeper's trying to steal all our stuff again",
  "Yeah baby tonight",
  " grab your sword",
  " armor and gold",
  " take your revenge",
  "So fight",
  " fight like it's the last",
  " last night of your life",
  " life",
  " show them your bite",
  "'Cause baby tonight",
  " the creeper's trying to steal all our stuff again",
  "'Cause baby tonight",
  " you grab your pick",
  " shovel and bolt again",
  "And run",
  " run until it's done",
  " done",
  " until the sun comes up in the morn''Cause baby tonight",
  " the creepers tried to steal all our stuff again"
];
const Discord = require("discord.js");
require("dotenv").config();

const Bot = new Discord.Client();
Bot.login(process.env.DISCORD_TOKEN);
Bot.on("ready", () => {
  console.log("CREEPER? AW MAN \n" + Bot.guilds.length);
  Bot.user.setPresence({ game: { name: "creeper? aw mannn" }, status: "idle" });
});

Bot.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("creeper")) {
    lyrics(message, 0);
  } else if (message.content.startsWith("STOP")) {
    message.channel.send("NAW NO ONE STOPIN ME");
  }
});
var maxLength = lyricsArr.length;
function lyrics(msg, lyric) {
  var int = 0;
  setInterval(() => {
    msg.channel.send(lyricsArr[int]);
    int++;
  }, 2000);
}

const l =
  "Creeper, oh man So we back in the mine, got our pick axe swinging from side to side,Side, side to side This task a grueling one, hope to find some diamonds tonight, night, night Diamonds tonight Heads up, you hear a sound, turn around and look up, total shock fills your body,Oh no it's you again,I could never forget those eyes, eyes, eyes,Eyes, eyes, eyes'Cause baby tonight, the creeper's trying to steal all our stuff again,'Cause baby tonight, you grab your pick, shovel and bolt again,And run, run until it's done, done, until the sun comes up in the morn''Cause baby tonight, the creeper's trying to steal all our stuff againJust when you think you're safe, overhear some hissing from right behind,Right, right behindThat's a nice life you have, shame it's gotta end at this time, time, time,Time, time, time, timeBlows up, then your health bar drops, you could use a 1-up, get inside don't be tardy,So now you're stuck in there, half a heart is left but don't die, die, dieDie, die, die, die'Cause baby tonight, the creeper's trying to steal all your stuff again,'Cause baby tonight, you grab your pick, shovel and bolt again,And run, run until it's done, done, until the sun comes up in the morn''Cause baby tonight, the creeper's trying to steal all your stuff again,Creepers, you're mineDig up diamonds, and craft those diamonds and make some armor,Get it baby, go and forge that like you so, MLG pro,The sword's made of diamonds, so come at me broTraining in your room under the torch light,Hone that form to get you ready for the big fight,Every single day and the whole night,Creeper's out prowlin' - alrightLook at me, look at you,Take my revenge that's what I'm gonna do,I'm a warrior baby, what else is new,And my blade's gonna tear through youBring it'Cause baby tonight, the creeper's trying to steal all our stuff again,Yeah baby tonight, grab your sword, armor and gold, take your revenge,So fight, fight like it's the last, last night of your life, life, show them your bite,'Cause baby tonight, the creeper's trying to steal all our stuff again,'Cause baby tonight, you grab your pick, shovel and bolt again,And run, run until it's done, done, until the sun comes up in the morn''Cause baby tonight, the creepers tried to steal all our stuff again";

console.log(l.replace(/,/g, "KYS").split("KYS"));
