'use strict';

class Test {
  constructor(name) {
    this.name = name || '';
    this.request = {
      server: '',
      path: '',
      method: 'GET',
      params: {},
      query: {},
      headers: {},
      body: ''
    };
    this.response = {
      status: '',
      schema: null,
      headers: null,
      body: null
    };
  }
}

const testFactory = {
  create(name) {
    return new Test(name);
  }
};

module.exports = testFactory;
