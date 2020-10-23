import { Selector } from 'testcafe';

const chest = Selector('.footer__copyright--image');


fixture (`Tests of Cimpleo`)
	.page (`http://192.168.1.13:1313`);
	
test ('Inputs', async t =>{
//	.click('#cintact-form');
	await t
	.typeText(Selector('input').withAttribute('placeholder', 'Your E-mail Address'), 'test@sytylaya.com');
	await t
	.typeText(Selector('input').withAttribute('placeholder', 'Your Name'), 'Бесов Черт Алибабай-оглы');
	await t
	.click(Selector('button').withText('Send'));
	await t
	.click('#features');
	await t
	.click('#header-menu-toggle');
	await t
	.click('#header-menu-toggle');
	await t
	.hover(chest)
});

test ('Click of the About us', async t =>{
	await t
	.navigateTo('/about-us');
	});
test ('Click of the Services', async t =>{
	await t
	.navigateTo('/services');
	});
test ('Click of the Portfolio', async t =>{
	await t
	.navigateTo('/projects');
	});
test ('Click of the Blog', async t =>{
	await t
	.navigateTo('/blog');
	});
test ('Click of the button lang', async t =>{
	await t
	.navigateTo('//localhost:1313/ru/');
	});

