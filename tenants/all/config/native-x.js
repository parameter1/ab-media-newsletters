const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://abmedia.native-x.parameter1.com/email-placement', { enabled: true });

config
  .setAliasPlacements('default', [
    { name: 'default', id: '62f126175a48b00001162a04' },
  ])
  .setAliasPlacements('athletic-business-today', [
    { name: 'digital-focus-top', id: '62f126175a48b00001162a04' },
    { name: 'digital-focus-bottom', id: '630fb605238ef70001ff572c' },
    { name: 'facility-of-the-week', id: '62f3faa65a48b000011fb169' },
    { name: 'sponsored-content', id: '6318dd5d646e0b00017c1f6a' },
    { name: 'facility-of-merit', id: '631f60c9646e0b00018e4015' },
    { name: 'slot-1', id: '62b2220b1c9be80001f4e117' },
    { name: 'slot-2', id: '62c6c80e4e70600001b24506' },
    { name: 'slot-3', id: '62c6c8246b7dcc0001967589' },
    { name: 'slot-4', id: '62c6c8364e70600001b245a9' },
    { name: 'slot-5', id: '62c6c84b4e70600001b24623' },
  ])
  .setAliasPlacements('wfb-enews', [
    { name: 'slot-1', id: '62c6c89e6b7dcc00019677b6' },
    { name: 'slot-2', id: '62c6c8ae4e70600001b2479d' },
    { name: 'slot-3', id: '62c6c8d16b7dcc0001967829' },
    { name: 'slot-4', id: '62c6c8e36b7dcc000196786c' },
  ])
  .setAliasPlacements('aqua-today', [
    { name: 'sponsored', id: '6304f4b379581f0001830e89' },
    { name: 'slot-1', id: '62c6ca344e70600001b24bb6' },
    { name: 'slot-2', id: '62c6ca434e70600001b24be1' },
    { name: 'slot-3', id: '62c6ca554e70600001b24c33' },
    { name: 'slot-4', id: '62c6ca686b7dcc0001967c86' },
    { name: 'slot-5', id: '62c6ca776b7dcc0001967cc8' },
  ]);

module.exports = config;
