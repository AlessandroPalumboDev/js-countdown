Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
Potete stampare il messaggio in pagina con un semplice alert.
Bonus 1
Mostrate il conteggio alla rovescia in pagina;
Bonus 2
Aggiungete un bottone che interrompe il count down e mostra il messaggio;


- Creo variabile contdown con valore 10

-  Definisco la variabile di setInterval() di un secondo per avviare un countdown con una funzione anonima
    - Stampo in console a ogni interazione
    - quando arriva a 0 viene interrotto da clearInteral()
    - Stampa messaggio

BONUS 1
- Creo un titolo e un sottotitolo vuoto con un ID 'countdown' sul file html
- Sostituisco i console.log con la modifica del sottotitolo e rimuovo l' alert