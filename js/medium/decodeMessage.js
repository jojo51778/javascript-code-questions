/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  let row = 0, col = 0, direction = -1, colLen = message[0]?.length;
  let decoded = '';
  while (col < colLen) {
    decoded += message[row][col];
    if (row === 0 || row === message.length - 1) {
      direction = - direction;
    }
    row = row + direction;
    col++;
  }
  return decoded;
}
const input = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'] 
]
console.log("🚀 ~ decode(input):", decode(input))
