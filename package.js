Package.describe({
  summary: "Simple bootstrap 3 alerts"
});

Package.on_use(function (api, where) {
 api.use([
  'templating',
  'handlebars',
  ], 'client');

  if(api.export) {
    api.export('Alert', 'client');
  }
  api.add_files('simple-bootstrap3-alerts.html', 'client');
  api.add_files('simple-bootstrap3-alerts.js', 'client');
});