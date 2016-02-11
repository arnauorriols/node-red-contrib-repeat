module.exports = function (RED) {
  function Repeat(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    var storage = {};
    self.on('input', function(msg) {
      if (!storage.hasOwnProperty(msg._msgid)) {
        storage[msg._msgid] = {
          remaining: msg.repetitions || config.repetitions
        };
      }
      if (storage[msg._msgid].remaining > 0) {
        storage[msg._msgid].remaining -= 1;
        self.send(msg);
      } else {
        delete storage[msg._msgid];
      }
    });
  }
  RED.nodes.registerType('repeat', Repeat);

};
