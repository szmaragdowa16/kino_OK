function cityKat() {
    var mydata = JSON.parse(filmPoz);
    // document.getElementById('kat').style.color = 'red';
    // document.getElementById('kat').style.fontSize = '32px';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
    var img1 = "<img src= picture/corgi.jpeg>"
    var img2 = "<img src= picture/mia.jpeg>"
    var img3 = "<img src= picture/jakwytresowac.jpeg>"

    for (var i = 0; i < liczba; i++) {

        if (mydata[i].city == 'Katowice') {
            var li = document.createElement('span');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title + " " + "/"
            // // dodaje jakies zdarzenie do nowo utworzonego elementu
            // dodac go do istniejacej listy
            var button = document.querySelector('#jeden');
            button.appendChild(li);
            // document.getElementById('kat').innerHTML+= mydata[i].title + " " + ", "
            document.getElementById('seans').innerHTML = "Seanse na dzisiaj"
            document.getElementById('corgi').innerHTML = img1
            document.getElementById('mia').innerHTML = img2
            document.getElementById('jakwytresowac1').innerHTML = img3
        }
    }
    return false
}

function pierwsza() {

    document.getElementById("pierwsza line").style.color = "black"
    document.getElementById("pierwsza line").style.visibility = "hidden"
    document.getElementById("pierwsza line").style.cursor = "text"
    document.getElementById("druga line").style.visibility = "hidden"
    document.getElementById("trzecia line").style.visibility = "hidden"
    document.getElementById('wybranaGodzina').innerHTML = " godzina 11:00"
}
function druga() {
    document.getElementById("druga line").style.visibility = "hidden"
    document.getElementById("pierwsza line").style.visibility = "hidden"
    document.getElementById("trzecia line").style.visibility = "hidden"
    document.getElementById('wybranaGodzina').innerHTML = " godzina 13:00"
}
function trzecia() {
    document.getElementById("trzecia line").style.visibility = "hidden"
    document.getElementById("druga line").style.visibility = "hidden"
    document.getElementById("pierwsza line").style.visibility = "hidden"
    document.getElementById('wybranaGodzina').innerHTML = "  godzina 19:00"
}
function corgi() {
    document.getElementById('godziny').style.visibility = " visible"
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: CORGI psiak Królowej"
    document.getElementById('corgi').style.opacity = "1"
    document.getElementById('mia').style.display = "none"
    document.getElementById('jakwytresowac1').style.display = "none"
    var kup = document.getElementById('kup')
    kup.addEventListener("click", function () {
        document.getElementById('mia').style.visibility = "hidden"
        document.getElementById('jakwytresowac1').style.visibility = "hidden"


        document.querySelector('.wrapper1').style.visibility = "visible"

        document.getElementById("div2").style.display = "none"
        document.getElementById('rezerwuje').innerHTML = "Zaloguj sie, aby kupić bilet/y"
        document.getElementById('kup').style.visibility = "hidden"
    })
}
function mia() {
    document.getElementById('godziny').style.visibility = " visible"
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: MIA I BIAŁY LEW"
    document.getElementById('mia').style.opacity = "1"
    document.getElementById('corgi').style.display = "none"
    document.getElementById('jakwytresowac1').style.display = "none"
    var kup = document.getElementById('kup')
    kup.addEventListener("click", function () {
        document.getElementById('corgi').style.visibility = "hidden"
        document.getElementById('jakwytresowac1').style.visibility = "hidden"
        document.querySelector('.wrapper1').style.visibility = "visible"
        document.getElementById("div2").style.display = "none"
        document.getElementById('rezerwuje').innerHTML = "Zaloguj sie, aby kupić bilet/y"
        document.getElementById('kup').style.visibility = "hidden"
    })
}
function jakwytresowac1() {
    document.getElementById('godziny').style.visibility = " visible"
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: JAK WYTRESOWAĆ SMOKA III"
    document.getElementById('jakwytresowac1').style.opacity = "1"
    document.getElementById('mia').style.display = "none"
    document.getElementById('corgi').style.display = "none"
    var kup = document.getElementById('kup')
    kup.addEventListener("click", function () {
        document.getElementById('mia').style.visibility = "hidden"
        document.getElementById('corgi').style.visibility = "hidden"
        document.querySelector('.wrapper1').style.visibility = "visible"
        document.getElementById("div2").style.display = "none"
        document.getElementById('kup').innerHTML = "Zaloguj sie, aby kupić bilet/y"
    })
}
function cinemaKat() {
    var iloscKolumn = 5;
    var iloscWierszy = 6;
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

            tablica[i][j] = img + i + '/' + j
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
    document.getElementById("kwadrat").style.visibility = "hidden"
    document.getElementById("div2").innerHTML = napis;
    document.getElementById("napis").innerHTML = "Kliknij i wybierz miejsce";
    document.getElementById("napis").style.fontSize = "1.3em"
    var sum = 0;
    var elements = document.querySelectorAll("svg")
    elements.forEach(function (element) {
        element.style.height = '60px';
        element.style.width = '60px';
        element.style.border = "solid 1px silver";
        element.style.paddingLe = "10px";
        element.style.backgroundColor = 'transparent';
        element.addEventListener("click", function () {
            if (element.style.backgroundColor == "red") {
                document.getElementById("pierwsza line").style.visibility = "hidden"
                document.getElementById("druga line").style.visibility = "hidden"
                document.getElementById("trzecia line").style.visibility = "hidden"
                element.style.backgroundColor = "transparent"
                sum = sum - 15;
                var liczba = sum / 15;
                if (liczba == 1) {
                    var napis1 = "Wybrałeś" + " " + " " + liczba + " " + "miejsce"
                    var napis2 = "Rezerwuję to miejsce"
                    var napis3 = ""
                } else if (liczba == 0) {
                    var napis1 = "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis3 = "Wybierz miejsce"
                    var napis2 = ""
                } else if (liczba < 5) {
                    var napis1 = "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2 = "Rezerwuję te miejsca"
                    var napis3 = ""
                } else {
                    var napis1 = "Wybrałeś" + " " + liczba + " " + "miejsc"
                    var napis2 = "Rezerwuję te miejsca"
                    var napis3 = ""
                }
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł" + '<br>' + " " + napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł" + '<br>' + " " + napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
                document.getElementById("wrapper1").style.visibility = "visible"
            } else {
                element.style.backgroundColor = "red"
                sum = sum + 15;
                var liczba = sum / 15;
                if (liczba == 1) {
                    var napis1 = "Wybrałeś" + " " + " " + liczba + " " + "miejsce"
                    var napis2 = "Rezerwuję to miejsce"
                    var napis3 = ""
                } else if (liczba == 0) {
                    var napis1 = "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis2 = ""
                    var napis3 = "Wybierz miejsce"
                } else if (liczba < 5) {
                    var napis1 = "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2 = "Rezerwuję te miejsca"
                    var napis3 = ""
                } else {
                    var napis1 = "Wybrałeś" + " " + liczba + " " + "miejsc"
                    var napis2 = "Rezerwuję te miejsca"
                    var napis3 = ""
                }
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł" + '<br>' + " " + napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł" + '<br>' + " " + napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
            }
            document.getElementById("napis").style.visibility = "hidden"; 
        })
    })
}