const Category = require("../../models/Category");

exports.create = async (name) => {
  const category = await Category.create({
    name
  });

  if (!category)
    throw new Error('Was not possible to craete category');

  return category;
};
