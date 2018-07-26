////////////////////////////// 
//  3
//  Crea un array en la variable llamada arr
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código
var arr = [
    {
        name: 'pepito',
        age: 25
    },
    {
        name: 'pepito',
        age: 21
    },
    {
        name: 'Juan',
        age: 20
    }
];
// Hasta aquí

// TEST 1
if (typeof arr === 'object' && arr.length >= 0) {
    console.log('apruebas1');
} else {
    console.log('suspendes');
}
// TEST 2
if (typeof arr[0] === 'object') {
    console.log('apruebas2');
} else {
    console.log('suspendes');
}
// TEST 3
if (typeof arr[1] === 'object') {
    console.log('apruebas3');
} else {
    console.log('suspendes');
}
// TEST 4
if (typeof arr[2] === 'object') {
    console.log('apruebas4');
} else {
    console.log('suspendes');
}
// TEST 5
if (arr.length === 3) {
    console.log('apruebas5');
} else {
    console.log('suspendes');
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log('apruebas6');
} else {
    console.log('suspendes');
}

// TEST 6
if (arr[1].name === 'pepito') {
    console.log('apruebas7');
} else {
    console.log('suspendes');
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log('apruebas8');
} else {
    console.log('suspendes');
}
// TEST 8
if (arr[0].age === 25) {
    console.log('apruebas9');
} else {
    console.log('suspendes');
}
// TEST 9
if (typeof arr[2].name === 'string') {
    console.log('apruebas10');
} else {
    console.log('suspendes');
}

// TEST 10
if (arr[2].name[0] === 'J') {
    console.log('apruebas11');
} else {
    console.log('suspendes');
}