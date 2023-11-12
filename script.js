const cc = require("node-console-colors");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(cc.set("fg_yellow","Welcome to RDA system developed by PitHacker..."));

  readline.question(`Enter the user full name...`, user => {
   
    console.log("User",user);    
    
    console.log("retrieving the data...");
    for (let i=0; i<1000000000; i++)
    {
        if(i==0)
        {
            console.log(cc.set("fg_purple","checking in other databases..."));
        }
    }
    
    console.log("Checking for any data on instagram....");
    
    for (let i=0; i<10000000; i++)
    {
    }
    
    if(user=="Zain Gulbaz") {
        console.log("The user found on instagram");
        console.log(cc.set("fg_cyan","zackie07"));
    }
    else if(user=="Hussain Mohsin")
    {
        console.log("The user found on instagram");
        console.log(cc.set("fg_cyan","hussain_mohsin2008"));
        
    }
    else if(user=="Falak Shafique")
    {
        console.log("The user found on instagram");
        console.log(cc.set("fg_cyan","falak_shafiq6 , falak_shafiq, falakshafiq,__falak.05"));

    }
        else console.log(cc.set("fg_red","Sorry no data found for the user...."));

        console.log(cc.set("fg_blue","Good Bye!!!"));

   readline.close();
  });  


 

