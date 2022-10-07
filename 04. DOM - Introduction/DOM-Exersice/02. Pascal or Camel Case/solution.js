function solve() {
  let textElement = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result ='';

 if (convention === 'Camel Case') {
    let text = textElement.toLowerCase();
 
    for (let index = 0; index < text.length; index++) {
      if(text[index]=== ' '){
    
        result += text[index + 1].toUpperCase();
        index++;
      }else{
        result += text[index];
      }
    }
  }else if(convention === 'Pascal Case'){
    let text = textElement.toLowerCase();
   
    for (let index = 0; index < text.length; index++) {
      
      if(text[index]=== ' '){
    
        result += text[index + 1].toUpperCase();
        index++;
      }else{
        if (index === 0) {
         
          result += text[index].toUpperCase();
        }else{
          result += text[index];
        }
       
      }
    }

  }else{
    result = 'Error!';
  }


 let resultElement = document.getElementById('result');
 resultElement.textContent = result;
 return resultElement;

}