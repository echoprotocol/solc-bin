
var soljsonSources = [
  "soljson-v0.5.1.js",
  "soljson-v0.5.0.js",
  "soljson-v0.4.26.js",
  "soljson-v0.4.25.js",
  "soljson-v0.4.24.js"
];
var soljsonReleases = {
  "0.5.1": "soljson-v0.5.1.js",
  "0.5.0": "soljson-v0.5.0.js",
  "0.4.26": "soljson-v0.4.26.js",
  "0.4.25": "soljson-v0.4.25.js",
  "0.4.24": "soljson-v0.4.24.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
