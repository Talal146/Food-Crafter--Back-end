const { Category } = require('../models');

const categories = [
	{
		name: 'italian',
		image:
			'https://orderisda.org/wp-content/uploads/2016/09/iStock-891284194.jpg',
	},
	{
		name: 'Arabic',
		image:
			'https://www.shutterstock.com/image-photo/arabic-cuisine-middle-eastern-traditional-600nw-1690553077.jpg',
	},
	{
		name: 'chinese',
		image:
			'https://www.tastingtable.com/img/gallery/regional-chinese-food-explained/l-intro-1669836324.jpg',
	},
	{
		name: 'Indian',
		image:
			'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS',
	},
];

const seedCategories = async () => {
	for (const category of categories) {
		try {
			const createdCategory = await Category.findOneAndUpdate(
				{ name: category.name },
				category,
				{ upsert: true, new: true }
			);
			console.log(
				createdCategory
					? `Category "${createdCategory.name}" created successfully!`
					: `Category "${category.name}" already exists.`
			);
		} catch (error) {
			console.error('Error creating category:', error);
		}
	}
};

seedCategories();
