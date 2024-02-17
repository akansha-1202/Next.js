export function toSentenceCase(str) {
  // Ensure the string is not empty
  if (str.length === 0) {
    return "";
  }
  // Convert the first character to uppercase and the rest to lowercase
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
