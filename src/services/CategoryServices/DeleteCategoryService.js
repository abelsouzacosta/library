const Category = require("../../models/Category");

exports.delete = async (id) => {
  const category = await Category.findByPk(id);

  if (!category)
    throw new Error('Category not found');

  if (!await category.destroy())
    throw new Error('Was not possible to delete category instance');
};
