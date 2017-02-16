import { assert } from 'chai';
import Node       from '../scripts/Node';
import CompleteMe from '../scripts/complete-me';

describe('complete me', () => {
  var complete;

  beforeEach(() => {
    complete = new CompleteMe();
  });

  it('list should have null root', () => {
    assert.deepEqual(complete.root, new Node());
  });

  it.skip('should allow me to insert a letter' , () => {
    complete.insert('h');

    assert.equal(complete.root.data, 'h');
  });

  it.skip('should allow me to insert a two letters' , () => {
    complete.insert('he');

    assert.equal(complete.root.data, 'h');
    assert.equal(complete.root.children.data, 'e');
  });

  it.skip('should allow me to insert a three letters' , () => {
    complete.insert('hey');

    assert.equal(complete.root.data, 'h');
    assert.equal(complete.root.children.data, 'e');
    assert.equal(complete.root.children.children.data, 'y');
  });

  it.skip ('should allow me find the end/tail' , () => {
  complete.insert('hey');

  let node = complete.findTail();

  assert.equal(node.data, 'y');
});

  it.skip('should have the endOfWord return true at the end of the word', () => {
    complete.insert('hey');

    assert.equal(complete.root.data, 'h');
    assert.equal(complete.root.children.data, 'e');
    assert.equal(complete.root.children.children.data, 'y');

    assert.equal(complete.root.children.children.endOfWord, true);
  });

});
