import { Selector } from 'testcafe';

fixture (`Test of page blogs`)
	.page (`http://192.168.1.13:1313/blog/`);
	
test ('Filters', async t =>{
	await t
	.click(Selector('li').withText('#AboutUs'));
	await t
	.click(Selector('li').withText('#IoT'));
	await t
	.click(Selector('li').withText('#Web'));
	});

	test ('CimpleO Wins Clutch Award Top Russian Web Developer!', async t =>{
	await t
    .navigateTo('//localhost:1313/blog/cimpleo-wins-clutch-award-for-top-russian-web-developer/');
    });

    test ('NestJS, Modules and Swagger best practices', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/nestjs-modules-and-swagger-best-practices/');
    });

    test ('NestJS Flexable, reusable, scalable modules design', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/nestjs-flexable-reusable-scalable-modules-design/');
    });

    test ('CimpleO’s Effective Way to Support Small Businesses', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/effective-way-to-support-small-businesses/');
    });

    test ('Simple Arduino pH-meter using PH-4502C', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/simple-arduino-ph-meter/');
    });

    test ('CimpleO is on the Clutch 1000!', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/clutch1000_2019/');
    });

    test ('Top 20 WEB DEVELOPMENT COMPANIES IN RUSSIA', async t =>{
     await t
    .navigateTo('//localhost:1313/blog/top20august2019/');
    });

    test ('About Us', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/about/');
    });

    test ('Contribution to Image Effects', async t =>{
    await t
    .navigateTo('//localhost:1313/blog/contribution-to-image-effects/');
	});
