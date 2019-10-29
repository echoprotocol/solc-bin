
var soljsonSources = [
  "soljson-v0.5.11.js",
  "soljson-v0.5.10.js",
  "soljson-v0.5.9.js",
  "soljson-v0.5.8.js",
  "soljson-v0.5.7.js",
  "soljson-v0.5.6.js",
  "soljson-v0.5.5.js",
  "soljson-v0.5.4.js",
  "soljson-v0.5.3.js",
  "soljson-v0.5.2.js",
  "soljson-v0.5.1.js",
  "soljson-v0.5.0.js",
  "soljson-v0.4.26.js",
  "soljson-v0.4.25.js",
  "soljson-v0.4.24.js"
];
var soljsonReleases = {
  "0.5.11": "soljson-v0.5.11.js",
  "0.5.10": "soljson-v0.5.10.js",
  "0.5.9": "soljson-v0.5.9.js",
  "0.5.8": "soljson-v0.5.8.js",
  "0.5.7": "soljson-v0.5.7.js",
  "0.5.6": "soljson-v0.5.6.js",
  "0.5.5": "soljson-v0.5.5.js",
  "0.5.4": "soljson-v0.5.4.js",
  "0.5.3": "soljson-v0.5.3.js",
  "0.5.2": "soljson-v0.5.2.js",
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
