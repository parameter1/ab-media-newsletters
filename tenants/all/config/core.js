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
    name: 'Athletic Business Today',
    ...brands.ab,
  },
};

module.exports = config;
