const JSON5 = require('json5');

module.exports = (router, options) => {
  const { getValue } = options;
  const getValueThunk = (key) => {
    if (!key) {
      return '';
    }
    return new Promise((resolve) => {
      getValue(key, (value) => {
        if (!value) {
          return resolve('');
        }
        try {
          value = JSON5.parse(value);
          resolve(JSON.stringify(value, null, '  '));
        } catch (e) {
          resolve(value);
        }
      });
    });
  };
  router.get('/api/key/value', async (ctx) => {
    const { key } = ctx.query;
    ctx.body = await getValueThunk(key);
  });
};
