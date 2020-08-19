// Contains Command E modification
// Prevent Webpack warning on every build due to dynamic require()
// WARNING in ./node_modules/umzug/lib/helper.js 18:15-30
// Critical dependency: the request of a dependency is an expression

module.exports = {
  /**
   * Try to require module from file relative to process cwd or regular require.
   *
   * @param {string} packageName - Filename relative to process' cwd or package
   * name to be required.
   * @returns {*|undefined} Required module
   */
  resolve: function (packageName) {
    return undefined;
  },
};
