
exports.seed = async function(knex) {
  await knex("fruits").truncate()
  await knex("fruits").insert([
    {name: "apple", flavorLevel: 2 },
    {name: "strawberry", flavorLevel:3 },
    {name: "banana", flavorLevel:1 },
    {name: "raspberry", flavorLevel:3 },
    {name: "peach", flavorLevel:4 },
    {name: "watermelon", flavorLevel:5 }
  ])
};
