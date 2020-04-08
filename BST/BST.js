import { NODATA } from "dns";

class Node {
    constructor(left = null, right = null, data = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if(!node) {
            this.root = new Node(data);
        } else {
            const searchTree = function(node) {
                if(data < node.data) {
                    if(!node.left) {
                        node.left = new Node(data);
                        return;
                    } else {
                        searchTree(node.left);
                    }
                } else if(data > node.data) {
                    if(!node.right) {
                        node.right = new Node(data);
                        return;
                    } else {
                        searchTree(node.right);
                    }
                } else {
                    return;
                }
            };

            return searchTree(node);
        }
    }

    findMin() {
        let node = this.root;
        while(node.left) {
            node = node.left;
        }
        return node.data;
    }


    findMax() {
        let node = this.root;
        while(node.right) {
            node = node.right;
        }
        return node.data;
    }

    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if(!current) {
                console.log('can not find the data');
                return null;
            }
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
            return current;
        }
    }

    isPresent(data) {
        let current = this.root;
        while(current) {
            if(current.data === data) {
                return true;
            }
            if(current.data > data) {
                current = current.left;
            }else if(current.data < data) {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        function removeNode(node, data) {
            if(!node) {
                return null;
            }
            if(data > node.data) {
                node.right = removeNode(node.right, data);
            } else if(data < node.data) {
                node.left = removeNode(node.right, data);
            } else {
                if(node.left === null) {
                    return node.right;
                } else if(node.right === null) {
                    return node.left;
                }

                node.data = findMin(node.right);
                node.right = removeNode(node.right, data);
            }
            return node;
        }    
        this.root = removeNode(this.root, data);
    }

}