Package.describe({
  name: 'jagi:astronomy-forms',
  version: '0.1.0',
  summary: 'Forms for Meteor Astronomy',
  git: 'https://github.com/jagi/meteor-astronomy-forms.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jagi:astronomy@0.10.5');
  api.use('underscore');
  api.use('ui');

  api.imply('jagi:astronomy');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('insecure');
  api.use('jagi:astronomy-forms@0.1.0');
});
