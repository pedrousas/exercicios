//Parte A - Aquecimento Arrow Function
//Transforme as funções declarativas abaixo em Arrow Functions
// const upperName = function (name) {
//     return name.toUpperCase();
//   };
//   function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
//   }

// const upperName = (name)=>{
//     return name.toUpperCase();
//   }

// const myFunction = (p1,p2)=>{
//       return p1*p2
//   }

// const toCelsius = (fahrenheit)=>{
//     return (5 / 9) * (fahrenheit - 32);
// }

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//Destructuring - Desestruturação
// //Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
// function handleMouseMove(event) {
//     const clientX = event.clientX;
//     const clientY = event.clientY;
//     console.log(clientX, clientY);
//   }

// const handleMouseMove = (event) => {
//     let {clientX , clientY} = event
//     console.log(clientX, clientY);
// }

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// //A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
// const obj = { first: 'Jane', last: 'Doe' };
// let {first} = obj

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
// // company = {
//     name: 'ACME Corp',
//     address: 'Nowhere st',
//     products: {
//       shirts: {
//         colors: ['red', 'green', 'blue'],
//       },
//       socks: {
//         colors: ['cyan', 'magenta', 'yellow'],
//       },
//     },
//   };

//   let {name,products:{shirts:{colors},socks:{colors:colors2}}} = company

//   console.log(name,colors,colors2)

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
// const clothes = {
//     pants: { colors: ['black', 'blue'] },
//     shirts: { colors: ['white', 'red'] },
//     socks: { colors: ['beige', 'gray'] },
//   };

// let clone = {...clothes}  

// console.log(clone)

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
// var numbers = [4, 9, 16, 25];
// let raiz = numbers.map((num)=>{
//     return (Math.pow(num,2))
// })
// console.log(raiz)


//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
//  var numbers = [65, 44, 12, 4];

//  const multdez = (arr)=>{
//     let result = arr.map((num)=>{
//         return num*10
//     })
//     return result
//  }

//  console.log(multdez(numbers))

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
// var ages = [32, 33, 16, 40];

//  const age = (arr)=>{
//     let result = arr.filter((num)=>{
//         return num >= 18
//     })
//     return result
//  }

//  console.log(age(ages))

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
// data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog',
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog',
//     },
  
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat',
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog',
//     },
//   ];
// console.log(data.filter((item)=>{
//    if(item.type == "dog"){
//         return item.age
//    }
  
// }))

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
// var getShirtsColorsAmount = function (company) {
//     colors = company.products.shirts.colors;
//     return colors.length;
//   };

// let company = {
//     products:{
//         shirts:{
//             colors:['black','blue','red']
//         }
//     }
// }

// let getShirtsColorsAmount = (company)=>{
//     let {products:{shirts:{colors}}}= company
//     return colors.length;
// }
// console.log(getShirtsColorsAmount(company))

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
// const clothes = {
//     pants: { colors: ['black', 'blue'] },
//     shirts: { colors: ['white', 'red'] },
//     socks: { colors: ['beige', 'gray'] },
//   };
  
// let clone2 = {pants,...colors} = clothes
// console.log(colors)

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let arr1 = [...arr,...arr2].filter((x,y)=> y!=0 && y!= 4 ) 

// console.log(arr1)

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
// var persons = [
//     { firstname: 'Malcom', lastname: 'Reynolds' },
//     { firstname: 'Kaylee', lastname: 'Frye' },
//     { firstname: 'Jayne', lastname: 'Cobb' },
//   ];

// let nomecompleto = persons.map((nome)=>{
//     return  `${nome.firstname}  ${nome.lastname}`
// })
 
// console.log(nomecompleto)