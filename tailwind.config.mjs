import SmartHRUIPreset from "smarthr-ui/lib/smarthr-ui-preset";


const config = {
	presets: [SmartHRUIPreset],
	content: [
		"./node_modules/smarthr-ui/lib/**/*.js",
		"./src/app/**/*.tsx",
		"./src/components/**/*.tsx",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
