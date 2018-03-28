module.exports = function (cb) {
  /**
  *
  * if you want to send a json instead
  *  return cb(null,{
  *    hello: 'world'
  *  });
  */
  return cb(null, {status : 'Hello world 4!'});
};
