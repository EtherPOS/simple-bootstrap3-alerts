Package.describe({
  summary: "Simple bootstrap 3 alerts",
  // Version number.
  version: "0.0.4",
  // Optional.  Default is package directory name.
  name: "steeve:simple-bootstrap3-alerts",
  // Optional github URL to your source repository.
  git: "https://github.com/EtherPOS/simple-bootstrap3-alerts.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use([
    'templating',
    'handlebars',
  ], 'client');

  if(api.export) {
    api.export('Alert', 'client');
  }
  api.addFiles('simple-bootstrap3-alerts.html', 'client');
  api.addFiles('simple-bootstrap3-alerts.js', 'client');
});