module.exports = {
	env: {
		es2021: true,
		node: true,
		browser: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'standard'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module, ts, js'
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		semi: [1, 'always'],
		'@typescript-eslint/no-var-requires': 0,
        'space-before-function-paren': [0, 'never'],
        allowIndentationTabs: true,
		indent: ['error', 'tab'],
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	}
};