export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  // eslint-disable-next-line no-empty
  let len = 0;
  if (string != null) {
    if (prediction == null) {
      len = string.length;
    } else {
      for (let i = 0; i < string.length; i += 1) {
        if (prediction(string[i])) {
          len += 1;
        }
      }
    }
  }
  return len;
}
