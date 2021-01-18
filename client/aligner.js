// O(N * M) time and space complexity
const alignSeqs = ({ seq1, seq2 }) => {
  seq1 = seq1.toUpperCase();
  seq2 = seq2.toUpperCase();

  // create alignment matrix
  const matrix = [];
  for (let i = 0; i < seq2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < seq1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    matrix.push(row);
  }

  // fill alignment matrix with number of mutations at each index
  for (let row = 1; row < seq2.length + 1; row++) {
    for (let col = 1; col < seq1.length + 1; col++) {
      if (seq1[col - 1] === seq2[row - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1];
      } else {
        matrix[row][col] = 1 + Math.min(matrix[row - 1][col - 1], matrix[row - 1][col], matrix[row][col - 1]);
      }
    }
  }

  const numMutations = matrix[seq2.length][seq1.length];

  const newSeq = generateSequence(seq1, seq2, matrix);
  const match = seq1.length - numMutations <= 0 ? 0 : (seq1.length - numMutations) / seq1.length;

  return { seq1, seq2, newSeq, match, numMutations };
}

const generateSequence = (seq1, seq2, matrix) => {
  let r = seq2.length;
  let c = seq1.length;
  let newSeq = '';

  while (r > 0 || c > 0) {
    const align = r > 0 && c > 0 ? matrix[r - 1][c - 1] : Infinity;
    const insert = c > 0 ? matrix[r][c - 1] : Infinity;
    const remove = r > 0 ? matrix[r - 1][c] : Infinity;

    if (align <= insert && align <= remove) {
      seq1[c - 1] === seq2[r - 1] ? newSeq = seq1[c - 1] + newSeq : newSeq = `[${seq1[c - 1]}]` + newSeq;
      r--;
      c--;
    } else if (remove <= insert) {
      newSeq = '[X]' + newSeq;
      r--;
    } else if (insert < remove) {
      newSeq = '[_]' + newSeq;
      c--;
    } else {
      r--;
      c--;
    }
  }
  return newSeq;
}

export default alignSeqs;
