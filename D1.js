/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let mattia1 = 1 

// Questo è un datatype di tipo number. Serve per dare alla variabile un valore numerico.

let mattia2 = "parola"

// Questo è un datatype di tipo String. Serve per dare alla variabile un valore espresso sotto forma testuale

let mattia3 = true 

// Questo è un datatype di tipo Boolean. Serve per determinare se la variabile ha valore true o false

let mattia4 

// Questo è un datatype di tipo undefined. Quando non si assegna un valore alla nostra variabile questa rimane undefined. 

let mattia5= null

// Questo è un datatype di tipo null. Determina che il valore della variabile mattia5 è nullo. La variabile è vuota. 






/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "mattia"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12

let n2 = 20 

let n3 = n1 + n2

console.log(n3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "pigola"

console.log(name)

const numero2 = 2 


// Se provassimo a scrivere numero2 = 3 la console ci darebbe errore



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4

let sottrazione = (x - 4)

console.log(sottrazione)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'jonh'

let name2 = 'Jonh'

console.log(name1 === name2) 