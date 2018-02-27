// import 'atomic-framework/js/modules/setUp';
// import 'svgxuse'; //Polyfill for IE11 to support "use" tags in SVGs
// import advTest from 'cut-the-mustard/advanced';
// import 'atomic-framework/js/asyncModules'; // Async Module loader
// import Breakpoint from 'atomic-framework/js/modules/Breakpoint'; // breakpoint module
// import FontLoader from 'atomic-framework/js/FontLoader'; // font loader module
// import UpdateCopyrightYear from 'atomic-framework/js/CopyrightYear'; // font loader module

// function atomic_initialise() {
// 	const fontConfig = {
// 		google: {
// 			Raleway: [{ weight: '400' }, { weight: '400i' }, { weight: '700' }, { weight: '700i' }]
// 		}
// 	};
// 	FontLoader.init(fontConfig);

// 	Breakpoint.init(); // initialise breakpoint module

// 	UpdateCopyrightYear('copyright-year');

// 	window.onunload = function () {
// 		console.log('leaving window...');
// 	};
// }

// // cutting the mustard (https://www.npmjs.com/package/cut-the-mustard)
// // capable browsers only
// if (advTest()) {
// 	atomic_initialise();
// }

import Atomic from 'atomic-framework/js/app';