
function cityKrak() {
    
    var mydata = JSON.parse(filmPoz);
    // document.getElementById('krak').style.color = 'red';
    // document.getElementById('krak').style.fontSize = '32px';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
    var img1 = "<img src= tomy.jpeg>"
    var img2 = "<img src=jakwytresowac.jpeg>"
    var img3 = "<img src=caleszcze.jpeg>"

    for (var i = 0; i < liczba; i++) {

        if (mydata[i].city == 'Kraków') {


            var li = document.createElement('span');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title + " " + "/"
            // // dodaje stylowanie
            // li.style.color = 'grey';

            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#jeden');
            button.appendChild(li)

            // document.getElementById('krak').innerHTML+= mydata[i].title + " " + ", "
            document.getElementById('seans').innerHTML = "Seanse na dzisiaj"
            document.getElementById('tomy').innerHTML = img1
            document.getElementById('jakwytresowac').innerHTML = img2
            document.getElementById('caleszczescie').innerHTML = img3

        }
       
    }
  
}
function pierwsza(){

    document.getElementById("pierwsza line").style.color="black"
    document.getElementById("pierwsza line").style.visibility="hidden"
    document.getElementById("pierwsza line").style.cursor="text"
    document.getElementById("druga line").style.visibility="hidden"
   
    document.getElementById("trzecia line").style.visibility="hidden"
    document.getElementById('wybranaGodzina').innerHTML = " godzina 11:00" 

}
function druga(){
   
    document.getElementById("druga line").style.visibility="hidden"
    document.getElementById("pierwsza line").style.visibility="hidden"
    document.getElementById("trzecia line").style.visibility="hidden"
    document.getElementById('wybranaGodzina').innerHTML = " godzina 16:00"
}
function trzecia(){
  
    document.getElementById("trzecia line").style.visibility="hidden"
    document.getElementById("druga line").style.visibility="hidden"
    document.getElementById("pierwsza line").style.visibility="hidden"
    document.getElementById('wybranaGodzina').innerHTML = "godzina 21:00"
}

function tomy() {
    document.getElementById('godziny').style.visibility = " visible"
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: TO MY"
    document.getElementById('tomy').style.opacity = "1"
    document.getElementById('jakwytresowac').style.display="none"
    document.getElementById('caleszczescie').style.display="none"
    var kup=document.getElementById('kup')
kup.addEventListener("click", function(){
    document.getElementById('jakwytresowac').style.visibility = "hidden"
    document.getElementById('caleszczescie').style.visibility = "hidden"

 
    document.querySelector('.wrapper1').style.visibility =  "visible"

    document.getElementById("div2").style.display = "none"
    document.getElementById('rezerwuje').innerHTML="Zaloguj sie, aby kupić bilet/y"
              document.getElementById('kup').style.visibility="hidden"
})
}

function jakwytresowac() {
    document.getElementById('godziny').style.visibility = " visible"
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: JAK WYTRESOWAĆ SMOKA"
    document.getElementById('jakwytresowac').style.opacity = "1"
    document.getElementById('tomy').style.display="none"
    document.getElementById('caleszczescie').style.display="none"
    var kup=document.getElementById('kup')
kup.addEventListener("click", function(){
    document.getElementById('tomy').style.visibility = "hidden"
    document.getElementById('caleszczescie').style.visibility = "hidden"

 
    document.querySelector('.wrapper1').style.visibility =  "visible"

    document.getElementById("div2").style.display = "none"
    document.getElementById('rezerwuje').innerHTML="Zaloguj sie, aby kupić bilet/y"
              document.getElementById('kup').style.visibility="hidden"
})
}


function caleszczescie() {
    document.getElementById('godziny').style.visibility = " visible"
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: CAŁE SZCZĘŚCIE"
    document.getElementById('caleszczescie').style.opacity = "1"
    document.getElementById('jakwytresowac').style.display="none"
    document.getElementById('tomy').style.display="none"
    var kup=document.getElementById('kup')
kup.addEventListener("click", function(){
    document.getElementById('tomy').style.visibility = "hidden"
    document.getElementById('jakwytresowac').style.visibility = "hidden"

 
    document.querySelector('.wrapper1').style.visibility =  "visible"

    document.getElementById("div2").style.display = "none"
    document.getElementById('rezerwuje').innerHTML="Zaloguj sie, aby kupić bilet/y"
              document.getElementById('kup').style.visibility="hidden"
})
}


function cinemaKrak() {

    // ?sprawdzamy ile mamy obiektów

    var iloscKolumn = 6;
    var iloscWierszy = 5;
    var napis = "";
    var img = "<svg></svg>"
    var tablica = [];
    
    //deklaracja drugiego wymiaru tablicy
    for (var i = 0; i < iloscWierszy; i++) {
        tablica[i] = [];
    }
    //wypełnianie tablicy wartościami
    for (var i = 0; i < iloscWierszy; i++) {
        for (var j = 0; j < iloscKolumn; j++) {
            
        tablica[i][j] = img +i + '/' + j 
        
        
        }
    }
    //odczytywanie tablicy i generowanie napisu  
    for (var i = 0; i < iloscWierszy; i++) {
        for (var j = 0; j < iloscKolumn; j++) {
            napis += tablica[i][j];
           
        }
        napis += '<br>';
    }
    //wyświetlenie napisu na stronie

    document.getElementById("kwadrat").style.display = "none"

    document.getElementById("div2").innerHTML = napis;
    document.getElementById("napis").innerHTML = "Kliknij i wybierz miejsce";
    document.getElementById("napis").style.fontSize = "1.3em"



    var sum = 0;
 
    var elements = document.querySelectorAll("svg")

    elements.forEach(function (element) {
       
        element.style.height = '60px';
        element.style.width = '60px';

        element.style.border ="solid 1px silver";
        element.style.paddingLe ="10px";
        element.style.backgroundColor = 'transparent';

        element.addEventListener("click", function () {
            if (element.style.backgroundColor == "red") {
                document.getElementById("pierwsza line").style.visibility="hidden"
              document.getElementById("druga line").style.visibility="hidden"
             
              document.getElementById("trzecia line").style.visibility="hidden"

                element.style.backgroundColor = "transparent"
                sum = sum - 15;
                var liczba=sum/15;
                if(liczba==1){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsce"
                    var napis2= "Rezerwuję to miejsce"
                    var napis3=""
                }
                


                else if(liczba==0){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis3= "Wybierz miejsce"
                    var napis2=""
                  
                }
                else if(liczba<5){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2= "Rezerwuję te miejsca"
                    var napis3=""
                 

                }


                else{
                    var napis1= "Wybrałeś" + " " + liczba + " " + "miejsc" 
                    var napis2= "Rezerwuję te miejsca"
                    var napis3=""
                }
               
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " +" wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " +" wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
                document.getElementById("wrapper1").style.visibility = "visible"
               
            } else {
                
        
                element.style.backgroundColor = "red"
                
               
               
                sum = sum + 15;
                var liczba=sum/15;
                if(liczba==1  ){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsce"
                    var napis2= "Rezerwuję to miejsce"
                    var napis3=""
                }
                else if(liczba==0){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis2=""
                    var napis3= "Wybierz miejsce"
                   

                }
                else if(liczba<5){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2="Rezerwuję te miejsca"
                    var napis3= ""
                   

                }


                else{
                    var napis1= "Wybrałeś" + " " + liczba + " " + "miejsc" 
                    var napis2= "Rezerwuję te miejsca"
                    var napis3=""
                }
               
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
               
            
               
            
            
            }

            


         
           
           
            document.getElementById("napis").style.visibility = "hidden";
            // document.getElementById("cena").style.fontSize="1.3em"
            // var podsuma=document.getElementById("podsuma")
            // podsuma.addEventListener("click", function () {
            //    document.getElementById('danedopodsumy').innerHTML=sum
            // })
        })

    })
    
    
}
