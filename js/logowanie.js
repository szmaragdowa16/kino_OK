function validate() {

    var mydata = JSON.parse(login);
    var liczba = Object.keys(mydata).length
    for (var i = 0; i < liczba; i++) {
        var name = document.getElementById('name').value
        // walidacja hasła
        var text = 'Wpisz poprawne hasło';
        var text1 = '';
        var check = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;
        if (check.test(name)) {
            document.getElementById('test').innerHTML = text1;
        } else {
            document.getElementById('test').innerHTML = text;
            return false;
        }
        //   zamiana input email na duze litery pomocne do logowania niezaleznie od wielkosci liter
        var email = document.getElementById('email').value
        var uperr = email.toUpperCase()
        console.log(uperr)
        var text = 'Wpisz poprawny email';
        var text1 = '';
        var check = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/
        if (check.test(email)) {
            document.getElementById('test').innerHTML = text1;
        } else {
            document.getElementById('test').innerHTML = text;
            return false;
        }
        // map() maila z json na duze litery, pomocne do logowania niezaleznie od wpisanej wielkosci litery
        var strings = [mydata[i].mail];
        var strings = [mydata[i].mail];
        function makeUpperCase(v) {
            return v.toUpperCase();
        }
        var uppers = strings.map(makeUpperCase);
        var password = mydata[i].password
        if (password == name) {
            if (uperr == uppers) {
                var img4 = "<img src=picture/emotka-min.png>"
                document.querySelector('.wrapper1').style.visibility = 'hidden'
                document.querySelector('#rezerwuje').style.visibility = 'hidden'
                // document.querySelector('#cena').style.visibility = 'hidden'
                document.getElementById('zalogowany').style.visibility = 'visible'
                document.querySelector('#kup').style.visibility = 'hidden'
                document.getElementById('zalogowany').innerHTML = "Zapłać i ciesz się z pobytu w naszym kinie "
                document.getElementById('log').innerHTML = img4 + "zalogowany"
            } else {
                var text = "Nie ma Cię w bazie użytkowników,<br> albo wprowadziłeś nieprawidłowe dane";
                document.getElementById('test').innerHTML = text;
            }
        } else {
            var text = "Nie ma Cię w bazie użytkowników,<br> albo wprowadziłeś nieprawidłowe dane";
            document.getElementById('test').innerHTML = text;
        }
    }
}
var znikanie = document.getElementById('button')
znikanie.addEventListener('click', function () {
    // document.getElementById('kup').innerHTML=""
    document.getElementById('rezerwuje').innerHTML = ""
})