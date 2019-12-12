exports.up = function(knex) {
	return knex.scheme
		.createTable('recipes', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullAble();
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullAble();
		})
		.createTable('instructions', (tbl) => {
			tbl.increments();
			tbl.string('instructions', 255).notNullAble();
			tbl.integer('steps_num').notNullAble();
			tbl.integer('recipe_id').notNullAble();
		})
		.createTable('recipe_ingred', (tbl) => {
			tbl.increments('recipe_id');
			tbl.integer('ingred_id').notNullAble();
			tbl.float('quantity').notNullAble();
		});
};

exports.down = function(knex) {};
