import { Selector } from 'testcafe';

fixture (`Tests of Cimpleo`)
	.page (`http://192.168.1.13:1313/projects/`);
test ('Filters', async t =>{
	await t
	.click(Selector('li').withText('#eCommerce'))
	await t
	.click(Selector('li').withText('#Health&Fitness'))
	await t
	.click(Selector('li').withText('#Telecom'))
	await t
	.click(Selector('li').withText('#Media'))
	await t
	.click(Selector('li').withText('#Education'))
	await t
	.click(Selector('li').withText('#RealEstate'))
	await t
	.click(Selector('li').withText('#Corporate'))
	await t
	.click(Selector('li').withText('#Events'))
	await t
	.click(Selector('li').withText('#Logistics'))
	});
