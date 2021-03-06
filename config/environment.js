/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-spotify',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    torii: {
      sessionServiceName: 'session',
      providers: {
        spotify: {
          apiKey: 'c18d59022f254fd28accf49da5efe888',
          redirectUri: 'http://localhost:4200/oauth2-callback',
          showDialog: true,
          scope: 'playlist-read-collaborative playlist-read-private user-library-read'
        }
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/gh-pages';
    ENV.locationType = 'hash';
    ENV.torii.providers.spotify.redirectUri = 'http://ewoody.github.io/w_r_spotify/#/oauth2-callback';
  }

  return ENV;
};
