module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
			},
		],
		'no-tabs': 0,
		'linebreak-style': 0,
		'new-cap': 0,
	},
};
