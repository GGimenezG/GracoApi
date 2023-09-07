/**Here we setup things like our passport strategies and define authorization methods. */ 

const bcrypt = require('bcrypt')

async function hashPassword(password:String) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log(hash)
    return hash
}

export { hashPassword }