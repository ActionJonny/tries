import Node from './Node';
require('locus');

class CompleteMe {
  constructor() {
    this.root        = new Node();
    this.length      = 0;
    this.suggestions = [];
  }

  insert(word) {
    let letter      = word.split('');
    let currentNode = this.root;

    for (let i = 0; i < letter.length; i++) {

      if (currentNode.children[letter[i]]) {
        currentNode = currentNode.children[letter[i]];

      } else {
        currentNode.children[letter[i]] = new Node(letter[i]);
        currentNode = currentNode.children[letter[i]];

      }

    }

    this.length++;
    currentNode.endOfWord = true;
  }

  suggest(word) {
    let currentNode = this.root;
    let letter      = word.split('');

    for (let i = 0; i < letter.length; i++) {

      if (currentNode.children[letter[i]]) {
        currentNode = currentNode.children[letter[i]];

      } else {
        return null;

      }

    }

    return this.words(currentNode, word);
  }

  words(currentNode, stringPassedIntoSuggest) {
    let nodeKey = Object.keys(currentNode.children);

    if (currentNode.endOfWord) {
      this.suggestions.push(stringPassedIntoSuggest);
    }

    for (let i = 0; i < nodeKey.length; i++) {
      let node = currentNode.children[nodeKey[i]];
      this.words(node, stringPassedIntoSuggest + nodeKey[i]);

    }

    return this.suggestions;
  }

  count() {
    return this.length;
  }

  populate (text) {
    for (let i = 0; i < text.length; i++) {
      this.insert(text[i]);
    }
  }

}

export default CompleteMe;
