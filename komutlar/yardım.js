const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  const prefix = ayarlar.prefix
  
  
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Cexy Register")
    .setColor("RANDOM")
    .setFooter(`Cexy Was Here!`)//buraya dokunma. bot kapanır aga öxzçlişzxö :D
    .addField(
      "__Yardım Menüsü__", `
      
\ \`${prefix}erkekrol\` : **Erkek Rolünü Ayarlar**

\ \`${prefix}kızrol\` : **Kız Rolünü Ayarlar**

\ \`${prefix}kayıtkanal\` : **Kayıt Kanalını Ayarlar**

\ \`${prefix}sohbetkanal\` : **Sohbet Kanalını Ayarlar**

\ \`${prefix}girişkanal\` : **Giriş Kanalını Ayarlar**

\ \`${prefix}tag\` : **Tag Ayarlar ( İsterseniz Ayarlamayın! )**

\ \`${prefix}yetkilirol\` : **Yetkili Rolü Ayarlar**

\ \`${prefix}kayıtsızrol\` : **Kayıtsız Rolü Ayarlar**

\ \`${prefix}kayıtsıfırla\` : **Kayıt Ayarlarını Sıfırlar**

\ \`${prefix}e\` : **Erkek Kayıt Yapr**

\ \`${prefix}k\` : **Kız Kayıt Yapar**

`);
 
  message.channel.send(embed);                                          
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};



exports.help = {
  name: "yardım",
};