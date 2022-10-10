//The program get the number of user and print the table of multiplication
let userNumber=window.prompt("Please, enter le number  you want to get its multiplication table");
let lastMultiplicator=window.prompt("Please, enter the last multiplicator")
let counter=0; //counter value has defined to count the number of times the loop will be executed
while(counter<=lastMultiplicator){
    document.write(userNumber+ "*"+ counter+ "="+ userNumber*counter + "<br>");
    counter++;//the value of counter is incremented each time
}

//EXEMPLE RESULT
//5*0=0
//5*1=5
//5*2=10
//5*3=15
//5*4=20
//5*5=25
//5*6=30
//5*7=35
//5*8=40
//5*9=45
//5*10=50
//5*11=55
//5*12=60