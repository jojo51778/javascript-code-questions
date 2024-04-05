class NodeStore {
  /**
  * @param {Node} node
  * @param {any} value
  */
 map = {}
 set(node, value) {
  node.key = Symbol();
  this.map[node.key] = value
 }
 /**
  * @param {Node} node
  * @return {any}
  */
 get(node) {
  return this.map[node.key]
 }
 
 /**
  * @param {Node} node
  * @return {Boolean}
  */
 has(node) {
  return !!this.map[node.key]
 }
}