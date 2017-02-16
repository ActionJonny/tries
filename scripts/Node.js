const text = "/usr/share/dict/words";

class Node {
  constructor(data) {
    this.data      = data;
    this.endOfWord = false;
    this.children  = {};
  }
}

export default Node;
