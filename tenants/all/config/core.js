const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  // Option #2 for header is to comment out 'name' //
  'athletic-business-today': {
    name: 'Athletic Business Today',
    ...brands.ab,
  },
  'wfb-enews': {
    // name: 'WFB E-News',
    ...brands.wfb,
  },
  'aqua-today': {
    name: 'AQUA Today',
    ...brands.aqua,
  },
};

module.exports = config;
