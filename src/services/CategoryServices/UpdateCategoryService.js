const Category = require("../../models/Category")

exports.update = async (id, name) => {
  const category = await Category.findByPk(id);

  category.name = name;

  if (!await category.save())
    throw new Error('Was not possible to update category instance');

  return category;
};
