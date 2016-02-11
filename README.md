Repeat NodeRED Node
=====================

Allow a message to pass through this node for an specific number of times, after which it will be discarded.
 This unveils the ability to loop over a flow N times. 

Install
-------

`rpm install -g node-red-contrib-repeat`

Notes on the design
-------------------
This node is designed in a stateless fashion; no state is stored in the node's context, and instead each
message stores its state for the current repeat node (in the `_loopController` property). This has some drawbacks,
like the fact that currently it does not support more than 1 repeat node operating upon a msg simultaneously. However,
the drawbacks of this approach are outweighed by the advantatges and safety of not having to manage a node-centralized state.


