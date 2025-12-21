// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '诺克斯的宝藏',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tianium/geo' }],
			sidebar: [
				{
					label: '开始',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '总览', slug: 'guides/overview' },
						{ label: '必要的准备', slug: 'guides/readiness' },
					],
				},
				{
					label: '网站生成',
					autogenerate: { directory: 'website' },
				},
				{
					label: '邮件',
					autogenerate: { directory: 'mail' },
				},
				{
					label: '域名',
					autogenerate: { directory: 'domain' },
				},
				{
					label: '部署平台',
					autogenerate: { directory: 'serverless' },
				},
				{
					label: '好用的软件',
					autogenerate: { directory: 'software' },
				},
				{
					label: '支付和理财',
					autogenerate: { directory: 'finance' },
				}
			],
		}),
	],
	server:{
		host:true,
		port:4321,
		allowedHosts:['4321.app.cloudstudio.work'],
	},
});
