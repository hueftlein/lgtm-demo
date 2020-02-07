/**
 * Writes something to document
 * @param text This needs to be safe! Do not pass in un-sanitized user-provided values!
 */
export const writeToDocument = text => {
  document.write(text);
};
