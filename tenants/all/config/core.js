const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  'athletic-business-today': {
    ...brands.ab,
    name: 'Athletic Business Today',
    message: 'AB Today will not be delivered next week in observance of the holidays. We’ll be back in your inbox Tuesday, Jan. 2. Season’s Greetings!',
    primaryColor: '#1f4391',
    subscribeText: 'Get your own subscription today!<br/><a style="color: #1f4391"><em>Athletic Business</em></a> magazine is completely free to qualified professionals in the athletic, fitness and recreation industries.<br/><a style="text-decoration: none; color: #c42127" href="https://athleticbusiness.dragonforms.com/loading.do?omedasite=ab_land" target="_blank">Subscribe</a> today!',
  },
  'wfb-enews': {
    ...brands.wfb,
    name: 'WFB E-News',
    primaryColor: '#7cc242',
    magazineHeaderText: 'Read Recent Issues',
    shareableHeaderText: 'WFB Shareable',
    subscribeText: '<a href="https://athleticbusiness.dragonforms.com/loading.do?omedasite=wfb_land" target="_blank" style="text-decoration: none;color: #7cc242">Subscribe</a> to WFB—free to qualified wood flooring pros.',
  },
  'aqua-today': {
    ...brands.aqua,
    name: 'AQUA Today',
    subscribeText: '<a href=https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land&utm_source=Newsletter&utm_email=email&utm_term=&utm_medium=4&oly_enc_id=4" target="_blank" style="text-decoration: none;color: #103A57">Subscribe to AQUA</a> — free to qualified pool and spa professionals!',
  },
};

module.exports = config;
