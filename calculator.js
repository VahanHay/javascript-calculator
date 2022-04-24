function add(){
    let num1;
    let num2;
   

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);

    let resalt = num1 + num2;

    document.getElementById('cout').innerHTML = resalt;
}

function sub(){
    let num1;
    let num2;

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);

    let resalt = num1 - num2;

    document.getElementById('cout').innerHTML = resalt;
}

function mul(){
    let num1;
    let num2;

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);

    let resalt = num1 * num2;

    document.getElementById('cout').innerHTML = resalt;
}

function diri(){
    
    let num1;
    let num2;

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    if(num2 === 0)
    {
        document.getElementById('cout').innerHTML = 'CAN NOT DIR ON ZERO';
        return;
    }

    let resalt =  (num1 / num2);
    resalt = resalt.toFixed(5);

    document.getElementById('cout').innerHTML = resalt;
}

function percent(){
    
    let num1;
    let num2;

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
   

    let resalt = (num1 / 100) * num2;

    document.getElementById('cout').innerHTML = resalt;
}

function root(){
    
    let num1;
    

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    if(num1 < 0)
    {
      document.getElementById('cout').innerHTML = "NUMBERS THAT IS LESS THEN ZERO DO NOT ROOT";
      return;
    }
   let resalt = Math.sqrt(num1);

    

    document.getElementById('cout').innerHTML = resalt;
}

function pow()
{
    let num1;
    let num2;

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);

    let resalt = Math.pow(num1 , num2);

    document.getElementById('cout').innerHTML = resalt;
}

function pi()
{
    
    document.getElementById('cout').innerHTML = 3.14;
}

function factorial(){
    
    let num1;
    

    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    if(num1 < 0)
    {
      document.getElementById('cout').innerHTML = "NUMBERS THAT IS LESS THEN ZERO DO NOT FACTORIAL";
       return;
    }
    if(num1 === 0 || num1 === 1){
        document.getElementById('cout').innerHTML = 1;
        return;
    }
    let resalt = 1;
    while(num1)
    {
        resalt = num1 * resalt;
        --num1;
    }
   
    

    document.getElementById('cout').innerHTML = resalt;
}