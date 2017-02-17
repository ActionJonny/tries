import { assert } from 'chai';
import Node       from '../scripts/Node';

describe('node', () => {

  it('node should be a constructor', () => {
    let node = new Node();
  })

  it('should be able to take in words', () => {
    let node = new Node('hello');
    assert.equal(node.data, 'hello');
  });

  it('should have a endOfWord property that defaults as false', () => {
    let node = new Node();
    assert.equal(node.endOfWord, false);
  });

  it('should have a children property that is an empty object', () => {
    let node = new Node();
    assert.deepEqual(node.children, {});
  });
});
