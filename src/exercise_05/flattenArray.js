export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw Error('Flatten undefined or null array');
  }
  if (!array.length) {
    return array;
  }
  const flat = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > 1) {
      for (let j = 0; j < array[i].length; j += 1) {
        flat.push(array[i][j]);
      }
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}
