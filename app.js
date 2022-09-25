let items = ["It is certain", "Outlook good", "You may rely on it", "It is decidedly so", "Without a doubt", "Yes definitely", 
"As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Ask again later",
"Better not tell you now", "Cannot predict now", "Don't count on it", "My reply is no",
"My sources say no", "Concentrate and ask again",  "Reply hazy, try again", "Outlook not so good", "Very doubtful"];
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


console.log(random_item(items));


