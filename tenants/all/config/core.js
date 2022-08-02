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
    ...brands.ab,
    name: 'Athletic Business Today',
  },
  'wfb-enews': {
    ...brands.wfb,
    name: 'WFB E-News',
    primaryColor: '#7cc242',
    subscribeText: 'Subscribe to WFB--free to qualified wood flooring pros.',
  },
  'aqua-today': {
    ...brands.aqua,
    name: 'AQUA Today',
  },
};

module.exports = config;
