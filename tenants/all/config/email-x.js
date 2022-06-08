const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://abmedia.serve.email-x.parameter1.com');

config
  .setAdUnits('athletic-business-today', [
    {
      name: 'ad-slot-1',
      id: '62a0b14acde7395c81634a54',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '62a0b15f01947073a713b0db',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '62a0b174019470453913b0ee',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '62a0b180cde7391b57634a82',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
