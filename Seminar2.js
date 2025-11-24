/*Tipuri de date in Javascript
Primitive:
1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Symbol
Non-primitive:
7.Object

Definirea variabilelor
var => variabile de tip "function-scoped"=>sunt vizibile numai in cadrul functiei in care dunt declarate;
in afara functiei=>global
let => variabile de tip "block-scoped" =>limitate la blocul in care sunt declarate(inchis de acolade{});
nu sunt accesibile in afar blocului respectiv
const => variabile de tip "block-scoped" =>imitate la blocul in care sunt declarate dar a caror valoare nu poate fi schimbata
Procesul de hoisting = declaratiile de variabile si functii sunt mutate in partea de sus a contextului lor de executie

Definirea obiectelor
Obiect = o colectie de perechi cheie-valoare in care fiecare cheie este un sir (sau simbol) care actioneaza un identitfocator
iar fiecare valoare poate fi de orice tip de date, inclusiv alte obiecte, functii sau primitive
*/
const student = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    yearsOld: 20,
}
console.log(student.name);
/*Definirea array-urilor
array = structura de date care poate stoca mai multe valori intr-un moment dat
 */
const arr =[1,2,3,4];
//Proprietati si functii utile in lucrul cu array-uri
lenght//obtine lungimea array-ului
push()//metoda care ne permite sa inseram un element la sf array-ului
pop()//elimina si returneaza ultimul element
shift()//elimina si returneaza primul element
slice()//returneaza o copie superficiala a unei portiuni a unui array intr-un noi obiect array selectat de la inceput la sfarsit

/*Metode si structuri de iteratie
for
forEach()
for...of
for..in

Definirea functiilor
cuvantul cheie function urmat de () sau prin functii arrow
*/
//exemplu arrow function
const materials=["Hidrogen", "Heliu", "Litiu"]
console.log(materials.map((material) => material.lenght));