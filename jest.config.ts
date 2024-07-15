const preset = 'ts-jest';
const testEnvironment = 'node';
const testMatch = [
	'**/tests/**/*.test.ts',
];

const config = {
	preset,
	testEnvironment,
	testMatch,
};

export default config;
