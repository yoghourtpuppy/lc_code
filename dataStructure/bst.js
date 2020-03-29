const BinarySearchTree = function () {
  this.root = null;
}

BinarySearchTree.prototype = {
  constructor: BinarySearchTree,
  contains: function(value) {
    let found = false;
    let current = this.root;
    while(!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  },

  add: function(value) {
    let node = {
      val: value,
      left: null,
      right: null,
    };
    let current = this.root;
    if (!current) {
      this.root = node;
    } else {
      while(true) {
        if(value < current.value) {
          if (!current.left) {
            current.left = value;
            break;
          } else {
            current = current.left;
          }
        } else if(value > current.value) {
          if (!current.right) {
            current.right = value;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  },

  traverse: function(process) {
    function inOrder(node) {
      if (node) {
        if (node.left) {
          inOrder(node.left);
        }
        process.call(this, node);
        if (node.right) {
          inOrder(node.right);
        }
      }
    }
  }
}

let a = [1, 2, 3];
let c = a.slice(0, 3);
c
