const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTgxMjA1MzkwMDM3ODc2NzU3.XOb78A.8EICFFG6kKXGyQFZzdbqG0NAaRQw';

function guild3() {
try {
var guild = client.guilds.get('514042707400720394');
  var role1 = guild.roles.get(`521353853296443403`);
  
  var ch1 = role1

ch1.edit({
 
color: '#ff0000',
})
ch1.edit({
 
color: '#ff4000',
})

ch1.edit({
 
color: '#ffff00',
})
ch1.edit({
 
color: '#bfff00',
})

ch1.edit({
 
color: '#00ffff',
})
ch1.edit({
 
color: '#00bfff',
})

ch1.edit({
 
color: '#0000ff',
})

  setTimeout(guild3, 4 * 1e3);
} catch(e) {}}


function guild5() {
try {


  var guild = client.guilds.get('514042707400720394');
  var role1 = guild.roles.get('521829663857704972');
  var ch1 = role1


ch1.edit({
  name: 'Black',
color: '#cc0066',
}) 
ch1.edit({
  name: 'Pink',
color: '#cc0066',
})
ch1.edit({
  name: 'BlackPink',
color: '#cc0066',
}) 
ch1.edit({
  name: 'In your area',
color: '#0d0d0d',
}) 
  setTimeout(guild5, 4 * 1e3);
} catch(e) {}}




client.once("ready", () => {
  guild5();
guild3();

});

client.login(token)



