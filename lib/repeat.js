module.exports = function (RED) {
  function Repeat(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    self.on('input', function(msg) {
      if (!msg.hasOwnProperty('_loopController') || msg._loopController.id !== this.id) {
        msg._loopController = {
          loops: 0,
          remaining: msg.repetitions || config.repetitions,
          id: this.id
        };
      }
      if (msg._loopController.remaining > 0) {
        msg._loopController.remaining -= 1;
        msg._loopController.loops += 1;
        self.send(msg);
      } else {
        if (config.elseOutput) {
          self.send([null, msg]);
        }
      }
    });
  }
  RED.nodes.registerType('repeat', Repeat);
};
