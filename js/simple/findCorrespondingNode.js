function findCorrespondingNode (rootA, rootB, target) {
  if (rootA === target) {
    return rootB
  }
  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
}