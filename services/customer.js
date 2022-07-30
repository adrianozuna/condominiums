const db = require('../services/db')

const getCustomers = () => {
    const data = await db.query(`SELECT * FROM customer`)

    return {
        data
    }
}

module.exports = {
    getCustomers
}