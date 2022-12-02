// let count = 1;
// while (count <= 5) {

//     console.log(count);
//     count = count + 1;
// }

// for(let i = 1; i <= 10; i ++){
//     console.log(i)
// }



// let question;
// const answer = 'sesame';
// do {
//     question = prompt('guess the magic word!'); 
    
// }while(question != answer){
//     console.log('sesame!!!')
// }


// const message = 'hello!';

// const html = `lorem lorem ${message} lorem lorem`;

// console.log(html);


// let message = 'you\'re blocked';
// const secret = 'pass';
// for(let i = 5; i >= 5; i--){
//     const answer = prompt(`enter your password, you have ${i} try`);
//    if(secret == answer){
//     message = 'successful login'
//     break
//    }
// }
//     alert(message);


// let row = 5;
// let col = 5;
// let output = '';
// for(let i = 0; i < row; i++){
//     output += '*'
//     for(let k = 0; k < col; k++){
//         output += '*'
//         if(k === col - 1){
//             output += '\n'
//         }
//     }
// }
// console.log(output)



// const num = 7;
// let output = '';

// for(i = 1; i <= num; i++){
//     for(j = 1; j <= num; j++){
//         if(i ==1 || i == num){
//             output += '* '
//         }else{
//             output += ' '
//         }
//     }
//     output += '\n'
// };


// let row = 10;
// let output = '';

// for(let i = 1; i <= row; i++){
//     for(let k = i; k <= row; k++){
//         output += ' '
//     }
//     for( let j = 1; j <= i; j++){
//         output += '* '
//     }
//     output += '\n'
// }

// console.log(output);


let row = 9;
let output = '';

for(let i = 1; i <= row; i++){
    for(let j = 1; j <= row; j++){
       
        if(i ==1 || i == row || j == 1 || j == row || j == i || j + i == row + 1){
            output += '* '
        }else{
            output += '  '
        }
    }
    
    output += '\n'
    }
   


console.log(output);