const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`==== Tabla de ${base} ====`.green);
    console.log('===================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('Base no es un numero'.red);
            return;
        }

        if (!Number(limite)) {
            reject('Limite no es un numero'.red);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            console.log(`${base} x ${i} es: ${base * i}`);
        }


    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Base no es un numero'.red);
            return;
        }

        if (!Number(limite)) {
            reject('Limite no es un numero'.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} es: ${base * i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}