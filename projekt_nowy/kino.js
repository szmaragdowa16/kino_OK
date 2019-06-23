
// function validate(){
    //     var mydata = JSON.parse(login);
    //     var liczba = Object.keys(mydata).length
    //     var check=/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}\s[a-zA-Z]{2,}$/;
    //     var name= document.getElementById('name').value; 
    //     if (check.test(name) ){
    //         document.getElementById('nameinfo').innerHTML='ok';
           
    //        }
       
    //     for (var i = 0; i < liczba; i++) {
    //         if (mydata[i].nam === name) {
    //             document.getElementById('nameinfo').innerHTML='jest w bazie';
    // console.log('jest w bazie')
    
    //         }
    //         else{
    //             document.getElementById('nameinfo').innerHTML='nie ma w bazie';
    //             console.log('nie ma w bazie')
    //         }
    //     }
    // }
    // var mydata = JSON.parse(login);
    //     var liczba = Object.keys(mydata).length
    //     for (var i = 0; i < liczba; i++) {
    //         var name= document.getElementById('name').value 
          
    
       
    //     var text='Wpisz poprawne hasło';
    //      var text1='';
    //      var check=/^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;
         
     
    //      if (check.test(name) ){
            
    //       document.getElementById('test').innerHTML=text1;
          
         
    //      }
        
    // else {
    //         document.getElementById('test').innerHTML=text;
    //         console.log('nie')
    
    // return false;
         
    //      }
         
        
      
        
        
    //      var email= document.getElementById('email').value
      
    //     var text='Wpisz poprawny email';
    //      var text1='';
    //      var check=/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
       
    //      if(check.test(email)){
    //        document.getElementById('test').innerHTML=text1;
          
    //      }else{
    //        document.getElementById('test').innerHTML=text; 
    //         return false;
    //      }
         
    //     console.log(mydata[i].password)
        
    //      if(mydata[i].password==name && mydata[i].mail==email){
             
            
    //         document.getElementById('all').style.visibility='visible' 
          
          
           
    //      }  
         
        
    //     }
       
    // }
        
    
        

    document.getElementById("wybor").addEventListener("change",function(){
        var selObj = document.getElementById("wybor");
        var selValue = selObj.options[selObj.selectedIndex].value;
        
        if (selValue == "poznan"){
        document.getElementById("kino_poznan").classList.remove("ukryj");
        document.getElementById("kino_warszawa").classList.add("ukryj")}
        if (selValue == "warszawa"){document.getElementById("kino_warszawa").classList.remove("ukryj");
                                   document.getElementById("kino_poznan").classList.add("ukryj")}
      })
    