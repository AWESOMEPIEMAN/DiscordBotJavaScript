const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
 console.log('logged in as ${client.user.tag} !');
});

client.on('message', msg =>{
  if (msg.content.includes("Who is pudding?")){
      msg.reply(["It looks like you're looking for the amazing <@495663537759453184>",
      "You can look for him at ",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
    if (msg.content.includes("Who is awais?")){
        msg.reply(["For mentally challenged person <@263448388576477185> : ",
        "https://www.instagram.com/lifeofawais/"
      ])
    }
  });

client.on('message', msg =>{
    if (msg.content.includes("Who is Iceflame?")){
        msg.reply(["Is kanjar <@527429958470205451> say mulakat kayliyay neechay dekhiyay",
        "https://www.instagram.com/mriceflame1/"
      ])
    }
  });

client.on('message', msg =>{
    if(msg.author.bot){return}
    if(msg.content === '.commands'){
        msg.channel.send("I have the following commands : \n .ice \n .aws \n use any :D")

    }
    });
    
client.on('message', msg =>{
    
if(msg.content === '.ice'){
    msg.channel.send("Bhai tu baby gurl kartay kartay marjai ga")
}
});

client.on('message', msg =>{
    
if(msg.content === '.abu'){
    msg.channel.send("<@263448388576477185> <@728997545623289897> <@763825341034004520> <@527429958470205451> <@719247539089571860> Ap sab logo kay abu <@495663537759453184> bula rahay hay")
}
});

client.on('message', msg =>{
    
if(msg.content === '.xam'){
    msg.channel.send("Meethay londay aja meri godi may bhet")
}
});

client.on('message', msg =>{
    
    if(msg.content === '.aws'){
        msg.channel.send("Beta aj rana tay awais nahi bachda. Aj awais nu chuk kay lejana")
    }
    });

client.on('message', msg =>{
    
    if(msg.content === '.L'){
        msg.channel.send(" Hello <@263448388576477185>")
    }
    });

client.on('message', msg =>{
    
        if(msg.content === '.under'){
            msg.channel.send("Ab underground janay ka sama agaya hay mera")
        }
        });

client.on('message', msg =>{
    
        if(msg.content === '.fu'){
            msg.channel.send("Fucking fuck fuck hogaya")
        }
        });

client.on('message', msg =>{
    
        if(msg.content === '.mamba'){
            msg.channel.send("Stop Stop Stop. 10 second peechay karo, Han theek")
        }
        });

client.on('message', msg =>{
    
        if(msg.content === '.aot'){
            msg.channel.send("Ustad yaqeen karo aik bibi hay <@728997545623289897> usnay humaray anime ki mommy sister aik ki wi hay")
        }
        });

client.on('message', msg =>{
    
        if(msg.content === '.meetha'){
            msg.channel.send("Puray server ka sabsay meetha londa <@763825341034004520> aja meri godi may bhet")
        }
        });

client.on('message', msg =>{
    
        if(msg.content === '.kuta'){
            msg.channel.send("<@527429958470205451> Bohot bara kuta hay <@527429958470205451> Bohot bara harami hay <@527429958470205451> bohot bara chu hay")
        }
        });

client.login(process.env.BOT_TOKEN);
