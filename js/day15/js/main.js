// console.log('day 15 - array');

// let f1 = 'Llo';
// let f2 = 'Kou';
// let f3 = 'Var';
// let f4 = 'Upa';
// let f5 = 'Tch';
// let f6 = 'Gri';
// let f7 = 'Rab';
// let f8 = 'Mba';
// let f9 = 'Gir';
// let f10 = 'Her';
// let f11 = 'Dem';

// let p1 = 'Lew'; 
// let p2 = 'Fra';
// let p3 = 'Szy';
// let p4 = 'Zie';
// let p5 = 'Gash';
// let p6 = 'Kam';
// let p7 = 'Kry';
// let p8 = 'Kiw';
// let p9 = 'Ber';
// let p10 = 'Szc';
// let p11 = 'Gi';

// let playersFr = ['llo', 'kou', 'var', 'upa', 'tch', 'gri', 'rab', 'mba', 'gir', 'her', 'dem']
// console.log(playersFr)
// console.log(playersFr[2])

// f3 = 'par'

// console.log(f3)

// for(let i = 0; i < playersFr.length; i++){
//     console.log(playersFr[i]);
// }

// let playersPl = ['lew', 'fra', 'szy', 'zie', 'gash', 'kam', 'kry', 'kiw', 'ber', 'szc', 'gi']
// console.log(playersPl)


// let numbers = [1, 2, 3, 5, 10, 3, 5, 8]
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//     console.log(numbers[i])
//     }

// }
// console.log(`\n`)
// console.log(numbers) 

// for(let i = 0; i < numbers.length; i++){
  
//     // count = count + 4 
//     numbers[i] = numbers[i] + 4
// }

// console.log(numbers)
// console.log(`\n`)

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum+= numbers[i];
// }
// console.log(sum)

// console.log(`\n`)



// let tictokA = [1, 2, 3]
// let tictokB = [1, 2, 3]
// let tictokC = [1, 2, 3]

let row = 3
let col = 3
let output = ' '

let x = [['*', '*', '*'], ['*', '*', '*'], ['*', '*', '*']];

for(let i = 0; i < x.length; i++){
    output ='';
    for(let j = 0; j < x[i].length; j++){
        
        // console.log(x[i][j]);
        output = output + ' | ' + output + x[i][j] + ' |'
        if(j == x[i].length -1){
            output = output + `\n`
        }
    }
}
console.log(output);
