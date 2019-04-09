/**
 * Created by vinhta on 08/04/2019.
 */
const input = '115\n8000\n177115\n206155'; // input

const getNoOfZeros = str => (str.match(/[0]/g) || []).length;

var lines = input.trim().split('\n');

for (var i = 0; i < lines.length; i++) {
  const num = lines[i];
  const noOfZeros = getNoOfZeros(num);
  if (noOfZeros === num.length - 1) { // special case
    process.stdout.write(num.concat('0'))
  } else {
    const numArray = [...num];
    // first reverse the array
    const rNumArray = numArray.reverse();
    const result = [];
    // swap the first pair that doesn't match
    let hasSwapped = false;
    for (let i = 0; i < rNumArray.length; i++) {
      if (i < rNumArray.length) {
        const a = rNumArray[i];
        const b = rNumArray[i + 1];
        if (a !== b && !hasSwapped) {
          result.push(b);
          result.push(a);
          ++i;
          hasSwapped = true;
        } else {
          result.push(a);
        }
      }
    }
    process.stdout.write(result.reverse().toString().replace(/,/g, ''));
  }
  process.stdout.write('\n');
}
