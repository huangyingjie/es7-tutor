import padStart from "string.prototype.padstart"
export default class StringPadding {
  constructor() {
    padStart.shim();
  }
  padStart (str, maxLength, content) {
    return str.padStart(maxLength, content);
  }
  padEnd (str, maxLength, content) {
    return str.padEnd(maxLength, content);
  }
};
