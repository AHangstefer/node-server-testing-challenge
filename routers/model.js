const db = require("../data/config")

function find(){
    return db("fruits")
}

function findById(id){
    return db("fruits")
        .where({id})
        .first()
}

async function create(data) {
    const [id] = await db("fruits")
        .insert(data)
        return findById(id)
}

async function update(id, data){
    await db("fruits")
        .where({id})
        .update(data)
        return findById(id)
}

function remove(id){
    return db("fruits")
        .where({id})
        .del()
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove
}
