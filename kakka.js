const Discord = require ('discord.js')
const client = new Discord.Client()
const prefix = 'poop'
const ytdl = require('ytdl-core')

client.on('ready',()=> {
    console.log('pissa')
})

client.on('message',msg=>{
    
    if(msg.mentions.users.has(client.user.id)){
        msg.channel.send('why you pinging me you gay fuck?! just do poop help and leave me alone >:(')
    }

    if(!msg.content.startsWith(prefix)) //|| msg.author.bot)
     return
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

process.on('exit', function() {
        client.destroy();
})
process.on('SIGINT', function() {
        client.destroy();
})


 const fs = require('fs')

    switch(command){
        case('ping'):
            msg.channel.send(`> ${client.ws.ping} ms`)
            break
        case('flip'):
            msg.channel.send('__the poop is spinning__').then((msg=>{
            setTimeout(function(){
                let two = Math.floor(Math.random()*Math.floor(2))
                var gay 
                if(two==0){
                    gay = '||peepee||'

                }else{
                    gay = '||poopoo||'

                }
                msg.edit('```the poop landed on``` '+gay)
            },6000)
            }))
            break
        case('roll'):
                msg.channel.send("your poop is...");
                var response = [Math.floor(Math.random() * ((10000 - 1) + 1) + 1)];
                msg.channel.send(response).then().catch(console.error);
                break   
        case('homer'):
             var lista = ['```iha ok, mut ootko kattonu simpsonit sarjasta jakson himo läski homer :D siinä esiintyy koko simpsonit perhe eli myös bart simpsons homer poika fanit saavat nauraa ja naurattaahan se tietty myös vaikka homerin läski kuteet ja muut :D kannattaa kattoo nopee```', '```Okei, mutta entä viimeinen jakso, jossa olit Fat Homer, Simpson: D, Bart Simpson, Homer, Boy Sells, Homer Fan? pidätkö Fatwan juonesta? pää päähän ja Simpsonin perhe: D ansaitsee sen heti```', '```Mutta missä on viisisataa budjettia nykyhistoriassa? Viimeinen julkaisu keskittyi Simpson 500: n palauttamiseen.```']

             var min = 0
             var max = lista.length - 1

                 var random = Math.floor(Math.random() * (max - min +1) + min)
            msg.channel.send(lista[random])
             break   
            
        case('joke'):
                 var vitsitiedosto = fs.readFileSync('jokes.txt').toString()

                     var jokes = vitsitiedosto.split('\n')

                     var min = 0
                     var max = jokes.length - 1

                         var random = Math.floor(Math.random() * (max - min +1) + min)
             msg.channel.send(jokes[random])
             break
        case('help'):
             msg.reply('```ping, flip, roll, homer, joke, insult, help, bj (blackjack) and more coming in the future!```')
             break
        case('insult'):
                 var insulttiedosto = fs.readFileSync('insults.txt').toString()
                     var insults = insulttiedosto.split('\n')

                     var min = 0
                     var max = insults.length - 1

                         var random = Math.floor(Math.random() * (max - min +1) + min)
                if( !(msg.mentions.members.first()) ){
                    msg.reply('pls ping someone who i should insult, you dont wanna get insulted, do you? :D');
                    return;
                }
                let mentionedUser = msg.mentions.members.first();
             msg.channel.send(`${insults[random].trim()} ${mentionedUser}`)
             break
        case('bj'):  
        var user = msg.author 

        function pickCard(){
            const kortit = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
            return kortit[Math.floor(Math.random() * kortit.length)]
        }
        var playerCards = []
        var dealerCards = []

       

        playerCards.push(pickCard())
        playerCards.push(pickCard())
        
        dealerCards.push(pickCard())
        
        dealerCardSum = dealerCards.reduce((a, b) => a + b, 0) 

        var playerCardSum = playerCards.reduce((a, b) => a + b, 0)
        var dealerCardSum = dealerCards.reduce((a, b) => a + b, 0)

        if(playerCards.includes(1) && playerCardSum + 10 < 21){
            playerCardSum += 10;
        }
        if(dealerCards.includes(1) && dealerCardSum + 10 < 21){
            dealerCardSum += 10;
        }


       
        var bottiViesti =
        msg.channel.send( user.username + ' has ' + playerCards + ', in total that is '+ playerCardSum + "\n" + 'the dealer has ' + dealerCards + ', :poop: ').then(viesti => {
            bottiViesti = viesti
            
        })
        

        .then (playerPlay) 

       function playerPlay() {

       let filter = m=> m.author.id === msg.author.id

        msg.channel.awaitMessages(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        })
    .then(msg => {
        msg = msg.first()
        if( msg.content.toLowerCase() == 'h') {
            playerCards.push(pickCard())
            playerCardSum = playerCards.reduce((a, b) => a + b, 0)
            bottiViesti.edit(  user.username + ' has ' + playerCards + ', in total that is '+ playerCardSum + "\n" +'the dealer has ' + dealerCards + ', :poop: ' );

            

            if( playerCardSum > 21 ){
                msg.channel.send(user.username + ' busted! the dealer wins!')
                stop
            }
            

            playerPlay() 
          

        

        } else if (msg.content.toLowerCase() =='s' ){ 
            dealerCards.push(pickCard())
            dealerCardSum = dealerCards.reduce((a, b) => a + b, 0)
            bottiViesti.edit( user.username + ' has ' + playerCards + ', in total that is '+ playerCardSum + "\n" + 'the dealer has ' + dealerCards + ' with the total of ' + dealerCardSum )
            

            while(dealerCards.reduce((a, b) => a + b, 0) < 17 ){
                dealerCards.push(pickCard())
                dealerCardSum = dealerCards.reduce((a, b) => a + b, 0)
                bottiViesti.edit(user.username + ' has ' + playerCards + ', in total that is '+ playerCardSum + "\n" + 'the dealer has ' + dealerCards + ' with the total of ' + dealerCardSum)
            }
            if(dealerCardSum > 21){
                msg.channel.send('the dealer busted! ' + user.username + ' wins!')
                stop
            }

            if(playerCardSum > dealerCardSum){
                msg.channel.send(user.username + ' wins!')
                stop
            }
            if(playerCardSum < dealerCardSum){
                msg.channel.send(user.username + ' loses!')
                stop
            }

            if(playerCardSum == dealerCardSum){
                msg.channel.send(user.username + ' got a draw! ')
                
            }   
           
        } else {
            msg.channel.send('invalid response')
            .then(playerPlay)
           }

           
         })
    
       } 
       break
    

            
             
             
             
        
      


                 

   
       
       
           

        
            

            
    
             }})            
            
client.login('NzgzNzgzMjc4MzM4OTAwMDE5.X8fxDw.U9bWkQO1glQYmGQzrWOa4NehX4A')