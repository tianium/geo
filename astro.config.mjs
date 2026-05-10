// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '地球生存手册',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tianium/terra' }],
			sidebar: [
				{
					label: '开始',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '总览', slug: 'guides/overview' },
						{ label: '必要的准备', slug: 'guides/readiness' },
						{ label: '关于我们的宇宙', slug: 'guides/universe' },
					],
				},
				{
					label: '网站生成',
					items: [
					{autogenerate: { directory: 'website' }},
					],
				},
				{
					label: '邮件',
					items: [
					{autogenerate: { directory: 'mail' }},
					],
				},
				{
					label: '域名',
					items: [
					{autogenerate: { directory: 'domain' }},
					],
				},
				{
					label: '部署平台',
					items: [
					{autogenerate: { directory: 'serverless' }},
					],
				},
				{
					label: '好用的软件',
					items: [
					{autogenerate: { directory: 'software' }},
					],
				},
				{
					label: '支付和理财',
					items: [
					{autogenerate: { directory: 'finance' }},
					],
				},
				{
					label: '常见问题',
					items: [
					{autogenerate: { directory: 'faq' }},
					],
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
