import Node from './Node';
require('locus');

class CompleteMe {
  constructor() {
    this.root  = new Node();
    this.count = 0;
  }


  insert (word) {
    let letter      = word.split('');
    let currentNode = this.root;

    for (var i = 0; i < letter.length; i++) {

      if (currentNode.children[letter[i]]) {
        currentNode = currentNode.children[letter[i]];
      } else {
        currentNode.children[letter[i]] = new Node(letter[i]);
        currentNode = currentNode.children[letter[i]];
      }
    }
    this.count++;
    currentNode.endOfWord = true;
  }

  suggest(word) {
    let currentNode = this.root;
    let letter      = word.split('');


    for (var i = 0; i < letter.length; i++) {

      if (currentNode.children[letter[i]]) {
        currentNode = currentNode.children[letter[i]];

      } else {
        return null;

      }
      // return this.words(currentNode, string);
    }
  }

  words() {

  }

}

let completion = new CompleteMe();

completion.insert('hello');
completion.insert('goodbye');
completion.insert('hell');

console.log(JSON.stringify(completion, null, 4))

export default CompleteMe;
