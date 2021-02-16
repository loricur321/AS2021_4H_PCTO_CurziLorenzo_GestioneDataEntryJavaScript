//dichiaro l'oggetto di persone
var names = new Object();
var i = 0;

//inserisco un event listener sul pulsante btnInserisci, in questo modo quando verrà cliccato potrò eseguire tutto il codice richiesto
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
        document.getElementById("triggerModal").click(); //faccio apparire il modale cliccando il pulsante che lo mostra a video
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
            nominativi.appendChild(blocco); //e in caso lo aggiungo alla casella dei nominativi
        }
        
        //inserisco nell'array il nominativo inserito
        names[i] = {
            nome: name,
            cognome: surname
        } 
        i++;
    }
});

//funzione che mostra un modale con all'interno tutti i nominativi inseriti
document.getElementById("btnVisualizza").addEventListener("click", function() {
    for(var j = 0; j < i; j++)
    {
        var listNames = document.getElementById("listNames"); //richiamo l'elemento html in cui dovrò inserire i nomi
        var blocco = document.createElement("li");
        blocco.className = "list-group-item"; //aggiungo la classe per poter avere la grafica di bootstrap
        blocco.id = "list-element"; //aggiungo un id che mi servirà in seguito per poter rimuovere i nomi mostrati dalla lista
        blocco.innerHTML = names[j].nome + " " + names[j].cognome;
        listNames.appendChild(blocco); //e infine appendo i nominativi nella lista 

    }
    document.getElementById("triggerList").click();
});
document.getElementById("btnClose").addEventListener("click", function() {
    for(var j = 0; j < i; j++) // per evitare di mostrare più volte lo stesso nominativo una volta chiuso il modale contente tutta la lista di nomi li rimuovo da essa
    {
        document.getElementById("list-element").remove();
    }
});
