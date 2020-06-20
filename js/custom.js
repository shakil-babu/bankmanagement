document.querySelector('.desinLogin').addEventListener('click',function(){
    document.querySelector('.desinLogin').style.display='none';

    document.querySelector('.login-area').style.display='block' ;
});

// for simple form validation

document.querySelector('.form').addEventListener('submit', function(e){
    var emailInput = document.querySelector('#emailInput').value ;
    var passInput = document.querySelector('#passInput').value ;

    if(passInput == 'shakilmia'){

        


        var hideArea = document.querySelector('.full-area');

        hideArea.style.display = "block" ;
    
    
        document.querySelector('.login-area').style.display='none';

    }else{
        document.querySelector('.showcode').innerHTML='Incorrect Password'
    };

// another if-else for email validation

if(emailInput == 'shakilbabu404@gmail.com'){

}else{
    document.querySelector('.showcode').innerHTML='Incorrect Email' 
}

 e.preventDefault();

});




// for  calculation the all bank statements


document.querySelector('#depositBtn').addEventListener('click', function(e){
    // for update deposite

    var depositInput = document.querySelector('#depositINput').value;
    var depositNumber = parseFloat(depositInput);

    var innervalue = document.querySelector('.current-deposite').innerHTML;
    var innerNumber = parseFloat(innervalue);


    document.querySelector('.current-deposite').innerHTML = depositNumber + innerNumber ;

    // for update balance
    var balancevalue = document.querySelector('.current-balance').innerHTML;
    var balanceNumber = parseFloat(balancevalue);

    document.querySelector('.current-balance').innerHTML = depositNumber + balanceNumber ;

    
    document.querySelector('#depositINput').value = '';


});
    // for withdraw 

    document.getElementById('withdrawBtn').addEventListener('click', function(e){

        var balancevalue = document.querySelector('.current-balance').innerHTML;
        var balanceNumber = parseFloat(balancevalue);

        var withdrawValue = document.querySelector('#withdrawINput').value;
        var withdrawNumber = parseFloat(withdrawValue);

        var accesswithdraw = document.querySelector('.current-withdraw').innerHTML;
        var currentWithdraw = parseFloat(accesswithdraw);

        document.querySelector('.current-withdraw').innerHTML = withdrawNumber + currentWithdraw;


        // for substract balance
        document.querySelector('.current-balance').innerHTML = balanceNumber - withdrawNumber ;


        // for if else
        var a =  document.querySelector('.current-balance').innerHTML = balanceNumber - withdrawNumber ;

        if(currentWithdraw>a){
            alert('You have not enough balance !');
        }

        document.querySelector('#withdrawINput').value = '';
    });

    

















