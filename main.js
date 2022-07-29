// 123 -- number
// "" -- string
// {} -- object
// [] -- array
// function() -- function
// true/false -- boolean

//napisi kod koj ke:

// sobira dva broja
function sobiraDvaBroja(a, b) {
  return a + b;
}

//pecati broevi od 1 do 10 vertikalno;
//loop - for, while
// specificen zbor : for ili  while
// (nekakov uslov vo vakvi zagradi) vo for imas + increment/decrement
//for:
//sekogas se deklarira i inicializira promenliva vo for - zborceto for se odnesuva na taa promenliva
// pa imame ; - tocka zapirka
// naredno e nekakov uslov
// pa imame ; - tocka zapirka
// na krajot imame inkrement/dekrement
var nizaSoIminja = ["Ljupco", "Goce", "Presil", "Gordana"];
var nizaSoBroevi = [1, 2, 3, 4, 5, 6, 7444, 0, -55, -1000];
var nizaSoNiziOdBroevi = [
  [1, 2, 3],
  [-1, -3, -5],
  [-1, -3, -5],
];
var nizaSoPrazniObjekti = [{}, {}, {}];
var nizaSoNekakviObjekti = [
  { firstName: "Goce", lastName: "Mitkovski" },
  { firstName: "Ljuco", lastName: "Petkovski" },
];
nizaOdSeIzmesano = [
  1,
  "3232",
  "kamd",
  "h",
  {},
  { firstName: { fristFirstName: "Goce", secondFirstName: "James" } },
  [],
];

var ovaEString = "AKJSDNKJASDNKJASNDASD";
var ovaENizaOdKarakteri = [
  "A",
  "K",
  "J",
  "S",
  "D",
  "N",
  "K",
  "J",
  "A",
  "S",
  "D",
  "N",
  "K",
  "J",
  "A",
  "S",
  "N",
  "D",
  "A",
  "S",
  "D",
];
//                  '   0   ','  1  ', '  2  ', '  3  '

for (var i = nizaSoIminja.length - 1; i >= 0; i = i - 7) {
  let imetoVoMomentotNaOvaaIteracija = nizaSoIminja[i];
  //   if (imetoVoMomentotNaOvaaIteracija[0] === "G") {
  console.log(imetoVoMomentotNaOvaaIteracija);
  //   }
}


// for pocni od posledniot element  - gledaj do prviot element - i namaluvaj za eden
//OCE NAS ZA FOR -> OD KADE DO KADE I ZA KOLKU DA SE ZGOLEMUVA/NAMALUVA (i)???

// console.log(a, b, c, d, e, f, g, h, i, j);

//pecati parni broevi od 1 do 10;
for (let i = 1; i < 11; i = i + 1) {
  if (i % 2 === 1) {
    console.log("brojot " + i + " e neparen");
  }
}

//pecati ime i prezime so konkatinacija

var firstName = "Ljupco";

var lastName = "Petkovski";
var fullName = firstName + " " + lastName;

//ispecati tri broja vo opagacki redosled
var x = 2,
  y = -11,
  z = -1;

if (x < y && x < z) {
  console.log("najmaliot broj e  x = ", x);
} else if (y < x && y < z) {
  console.log("najmaliot broj e y = ", y);
} else {
  console.log("najmaliot broj e z = ", z);
}

console.log(sobiraDvaBroja(2, 5));

var a = 1;
var b = sobiraDvaBroja(8, 9);
var c = a + b;

// proveri dali zbirot na dva broja e paren;

