const Category = require("../../models/Category")

exports.show = async (id) => {
  const category = await Category.findByPk(id, {
    include: 'books'
  });

  if (!category)
    throw new Error('Category not found');

  return category;
};
