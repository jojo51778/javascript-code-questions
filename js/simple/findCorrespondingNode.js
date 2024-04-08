// Recursive
function findCorrespondingNode (rootA, rootB, target) {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
  return null;
}
// Queue
function findCorrespondingNode (rootA, rootB, target) {
  if (rootA === target) return rootB;
  let queueA = [rootA];
  let queueB = [rootB];

  while(queueA.length) {
    let currentElementA = queueA.shift();
    let currentElementB = queueB.shift();
    if (currentElementA === target) return currentElementB;
    queueA.push(...currentElementA.children);
    queueB.push(...currentElementB.children);
  }
  return null;
}