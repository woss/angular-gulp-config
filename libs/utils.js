var _ = require('lodash');
var PATH_TO_PROJECT = '../../..';
var config = require(PATH_TO_PROJECT + '/angular-gulp-config.json');

module.exports = {
  /**
   * Returns a path to the project implementation root.
   * @return {string}
   */
  getProjectPath: function() {
    return PATH_TO_PROJECT;
  },
  /**
   * Returns a config setting by property.
   * @param {string} name
   * @return {mixed}
   */
  getConfig: function(name) {
    return _.get(config, name);
  }
};
