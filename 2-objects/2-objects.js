////////////////////////////// 
//  2
//  Crea un objecto en la variable llamada obj
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código
var obj = {
    a: {
        b: true,
        c: [0,2]
    },
    d: 6,
    f: 'Marc'
};
// Hasta aquí

// TEST 1
if (typeof obj === 'object') {
    console.log('apruebas1');
} else {
    console.log('suspendes');
}

// TEST 2
if (typeof obj.a.b === 'boolean') {
    console.log('apruebas2');
} else {
    console.log('suspendes');
}

// TEST 3
if (typeof obj.a.c[1] === 'number') {
    console.log('apruebas3');
} else {
    console.log('suspendes');
}
// TEST 4
if (typeof obj.d === 'number') {
    console.log('apruebas4');
} else {
    console.log('suspendes');
}
// TEST 5
if ( obj.d > 4 && obj.d < 8) {
    console.log('apruebas5');
} else {
    console.log('suspendes');
}

// TEST 6
if (typeof obj.f === 'string') {
    console.log('apruebas6');
} else {
    console.log('suspendes');
}
// TEST 6
if ( obj.f.length === 4) {
    console.log('apruebas7');
} else {
    console.log('suspendes');
}