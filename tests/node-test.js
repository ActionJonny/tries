import { assert } from 'chai';
import Node       from '../scripts/Node';
import CompleteMe from '../scripts/complete-me';

describe('node', () => {

  it.skip('should be able to take in words', () => {
    let node = new Node('hello');
    assert.equal(node.data, 'hello');
  });

  it.skip('should have a endOfWord property that defaults as false', () => {
    let node = new Node();
    assert.equal(node.endOfWord, false);
  });

  it.skip('should have a children property that is an empty object', () => {
    let node = new Node();
    assert.equal(node.children, {});
  });
});
