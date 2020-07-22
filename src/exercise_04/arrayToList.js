export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null) {
    throw Error('Creating list from undefined array');
  }
  if (array === undefined) {
    throw Error('Creating list from undefined array');
  }
  if (!array.length) {
    throw Error('Creating list from empty array');
  }
  let head = { value: array[0], next: null };
  let list = head;
  for (let i = 1; i < array.length; i += 1) {
    list.next = { value: array[i], next: null };
    if (i === 1) {
      head = list;
    }
    list = list.next;
  }
  return head;
}
