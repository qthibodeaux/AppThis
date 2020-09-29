const knexLib = require('knex')
const dbCfg = require('../knexfile')

let conn = null

function connect () {
    return new Promise(function (resolve, reject) {
       conn = knexLib(dbCfg.development)
        conn.raw(`SELECT 1 + 1 AS test`)
        .then((result) => {
            console.log(result.rows)
            if (result.rows.length === 1 && result.rows[0].test === 2) {
                console.log("Database connection established 👍")
                resolve()
            } else {
                reject('Database was unable to do 1 + 1 👎')
            }
            console.log(xxxxxxxxxxx)

        })
        .catch((err) => {
            reject(err)
        })      
    })
}

//Grab All Threads SQL Query
const getNotesQuery = `select * from notes;`

//Returns all threads from promise
function getNotes () {
    return conn.raw(getNotesQuery)
    .then((result) => {
        return result.rows
    }) 
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    connect: connect,
    getNotes: getNotes,
}