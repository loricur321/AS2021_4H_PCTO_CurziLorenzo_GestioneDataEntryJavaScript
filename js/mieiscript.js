//dichiaro l'oggetto di persone
var names = new Object();
var i = 0;


document.getElementById("btnInserisci").addEventListener("click", function() {
    //ricavo dalla form HTML i valori digitati dall'utente
    var name = document.getElementById("txtNome").value;
    var surname = document.getElementById("txtCognome").value;
    var flag = false;
    //converto tutti i caratteri in minuscolo
    name = name.toLowerCase();
    surname = surname.toLowerCase();
    //calcolo la lunghezza della stringhe nome e cognome
    var lenghtName = name.length;
    var lenghtSurname = surname.length;
    if((lenghtName < 2) || (lenghtSurname < 2)) //in caso siano minori di 2 avverto l'utente
    {
        document.getElementById("triggerModal").click();
        flag = true;
    }
    var flag2 = false;
    var charName = name.split(""); //trasfomrmo le stringhe contenenti nome e cognome in un vettore di char
    var charSurname = surname.split("");
    for(var j = 0; j < charName.length; j++)
    {
        var tmp = charName[j].charCodeAt(); //e tramite l'utilizzo del codice ASCII controllo che ogni carattere sia compreso nell'alfabeto
        if(tmp < 97 || tmp > 122)
        {
            flag2 = true;
        }
    }
    for(var j = 0; j < charSurname.length; j++)
    {
        var tmp = charSurname[j].charCodeAt();
        if(tmp < 97 || tmp > 122)
        {
            flag2 = true;
        }
    }
    if(flag2)
    {
        document.getElementById("triggerModal2").click();
    }
    if(!flag && !flag2) //in caso i dati vadano bene posso procedere con il resto delle operazioni
    {
        var firstLetter = name.charAt(0);
        var firstLetterCode = firstLetter.charCodeAt(); 
        if(firstLetterCode == 97 || firstLetterCode == 101 || firstLetterCode == 105 || firstLetterCode == 111 || firstLetterCode == 117) //controllo se il nome inizia con una vocale
        {
            var nominativi = document.getElementById("nominativi");
            var blocco = document.createElement("p");
            blocco.className = "nominativi";
            blocco.innerHTML = name + " " + surname;
            nominativi.appendChild(blocco);
        }
        //inserisco nell'array il nominativo inserito
        names[i] = {
            nome: name,
            cognome: surname
        } 
        i++;
    }

    // //funzione che mostra un modale con all'interno tutti i nominativi inseriti
    document.getElementById("btnVisualizza").click(function() {
        for(var j = 0; j < i; j++)
        {
            var blocco = jQuery("<li>" + names[j].nome + " " + names[j].cognome + "</li>");
            blocco.addClass("list-group-item");
            jQuery("#listNames").append(blocco);
        }
        document.getElementById("triggerList").click();
    });
     Query("#btnClose").on("click", function (){
            jQuery(".list-group-item").remove(); //una volta chiuso il modale rimuovi i componenti all'interno della lista
    });
});
