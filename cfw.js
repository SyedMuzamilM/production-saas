// @ts-ignore - @types/node
const ENV = process.env;

/**
 * @type {import('cfw').Config}
 */
module.exports = {
	entry: 'index.ts',
	profile: 'workers.demo',
	name: 'cms-api',
	routes: [
		'api.ley.dev/*'
	],
	globals: {
		DATABASE: 'KV:18457f77014344fabac0d596f9d2c08c',
		JWT_SECRET: `SECRET:${ENV.JWT_SECRET}`,
		STRIPE_SECRET: `SECRET:${ENV.STRIPE_SECRET}`,
		SENDGRID_TOKEN: `SECRET:${ENV.SENDGRID_TOKEN}`,
		SENDGRID_EMAIL: 'ENV:demo@ley.dev',
		SENDGRID_NAME: 'ENV:DEMO CMS',
	}
};
