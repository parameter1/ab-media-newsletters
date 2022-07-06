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
  'athletic-business-today': {
    // Option #2 for header is to comment out 'name' //
    name: 'Athletic Business Today',
    ...brands.ab,
  },
  'wfb-e-news': {
    name: 'WFB E-News',
    ...brands.wfb,
  },
};

module.exports = config;
