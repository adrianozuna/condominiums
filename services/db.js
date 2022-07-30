const sqlite =  require('better-sqlite3')
const path = require('path')
const db =  await new sqlite(path.resolve('/db/condominiums.db'), {fileMustExist: true})

const query = (sql, params) = () => {
    return db.prepare(sql).all(params)
}

module.exports = {
    query
}