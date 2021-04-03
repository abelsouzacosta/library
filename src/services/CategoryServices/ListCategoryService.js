const Category = require("../../models/Category")

exports.list = async () => {
  const categories = await Category.findAll({});

  if (!categories)
    throw new Error('No categories found');

  return categories;
};
