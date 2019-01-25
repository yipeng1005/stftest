module.exports = angular.module('stf/batchbatchControl', [
  require('stf/socket').name,
  require('stf/transaction').name,
  require('stf/keycodes').name
])
  .factory('BatchControlService', require('./batchControl-service'))

  