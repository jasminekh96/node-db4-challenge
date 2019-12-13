exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullable();
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullable();
		})
		.createTable('instructions', (tbl) => {
			tbl.increments();
			tbl.string('instructions', 255).notNullable();
			tbl.integer('steps_num').notNullable();
			// tbl.integer('recipes_id').notNullable();

			tbl
				.integer('recipes_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE'); //FORIEGN KEY for recipe id to recipes table
		})
		.createTable('recipe_ingred', (tbl) => {
			tbl.increments();
			// tbl.integer('ingred_id').notNullable();
			tbl.float('quantity').notNullable();

			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE'); //FORIEGN KET for recipe id to recipe table

			tbl
				.integer('ingred_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {};
