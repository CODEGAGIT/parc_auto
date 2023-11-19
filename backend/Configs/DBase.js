const mongoose= require('mongoose')

const dbcon = 'mongodb://localhost:27017/DataB'

if (!dbcon){
    console.log("erreur de connexion");
    process.exit(1)
}

async function db(){
    console.log(`connection to ${dbcon}`);
    try {
        mongoose.connect(dbcon)
        console.log(`connected to ${dbcon}`);
    } catch (error) {
        console.log("erreur de connexion");
        process.exit(1)
    }
}

db()
const connect = mongoose.connection
module.exports = connect