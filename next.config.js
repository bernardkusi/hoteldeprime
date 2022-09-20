// const withPWA = require('next-pwa');

// module.exports = withPWA({
// 	pwa: {
// 		dest: 'public',
// 		register: true,
// 		skipWaiting: true
// 	}
// });
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})