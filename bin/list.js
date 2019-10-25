
var soljsonSources = [
  "soljson-v0.4.24.js"
];
var soljsonReleases = {
  "0.4.24": "soljson-v0.4.24.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
