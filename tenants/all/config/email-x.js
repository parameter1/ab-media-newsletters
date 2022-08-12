const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://abmedia.serve.email-x.parameter1.com');

config
  .setAdUnits('athletic-business-today', [
    {
      name: 'ad-slot-1',
      id: '62a0b14acde7395c81634a54',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '62a0b15f01947073a713b0db',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '62a0b174019470453913b0ee',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '62a0b180cde7391b57634a82',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '62e9260cdf6984426928f535',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('wfb-enews', [
    {
      name: 'ad-slot-1',
      id: '62e9263edf698479c428f564',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '62e92654df69842e5928f577',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '62e92668196d2f15fceffc3f',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '62e9267adf6984b12f28f593',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('aqua-today', [
    {
      name: 'ad-slot-1',
      id: '62e926aedf69841b5e28f5d3',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '62e926bcdf6984a24a28f5e6',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '62e926ccdf6984b81d28f5f0',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '62e926dd196d2fbd42effcb7',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '62e926eadf6984f73828f60c',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
