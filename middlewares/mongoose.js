var config = {};

// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WEWu-qKLSJU

config.mongoURI = {
  development: 'mongodb://localhost:27017/movies-dev',
  test: 'mongodb://localhost:27017/movies-test'
};

module.exports = config;
