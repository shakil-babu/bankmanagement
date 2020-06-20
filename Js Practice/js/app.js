document.getElementById('Btn').addEventListener('click',function(e){
    const inputValue = document.querySelector('#inputTxt').value ;

    const Number_value = parseFloat(inputValue);

    var nmbr = Number_value;

for(let i = 0 ; i<=10 ; i++){
    const ele = i;
    const result =i+'*'+nmbr + '=' + i*nmbr ;
//   console.log(result);
  document.write(result+'</br>');
   
}

    e.preventDefault();
});