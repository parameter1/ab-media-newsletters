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
    primaryColor: '#1f4391',
    subscribeText: 'Get your own subscription today!<br/><a style="color: #1f4391"><em>Athletic Business</em></a> magazine is completely free to qualified professionals in the athletic, fitness and recreation industries.<br/><a style="text-decoration: none; color: #c42127" href="https://athleticbusiness.dragonforms.com/loading.do?omedasite=ab_land" target="_blank">Subscribe</a> today!',
  },
  'wfb-enews': {
    ...brands.wfb,
    name: 'WFB E-News',
    primaryColor: '#7cc242',
    subscribeText: '<a href="https://athleticbusiness.dragonforms.com/loading.do?r=8020C5690590H3S&omedasite=wfb_pref" style="text-decoration: none;color: #7cc242">Subscribe</a> to WFB--free to qualified wood flooring pros.',
  },
  'aqua-today': {
    ...brands.aqua,
    name: 'AQUA Today',
  },
};

module.exports = config;
