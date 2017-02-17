import { assert } from 'chai';
import Node       from '../scripts/Node';
import CompleteMe from '../scripts/Complete-Me';
let fs = require('fs');

describe('complete me', () => {
  var complete;

  beforeEach(() => {
    complete = new CompleteMe();
  });

  it('list should have null root', () => {
    assert.deepEqual(complete.root, new Node());
  });

  it('should allow me to insert a letter' , () => {
    complete.insert('h');
    assert.property(complete.root.children, 'h');
  });

  it('should allow me to insert a two letters' , () => {
    complete.insert('hello');

    assert.property(complete.root.children['h'].children, 'e');
  });

  it('should allow me to insert a three letters' , () => {
    complete.insert('hey');

    assert.property(complete.root.children['h'].children['e'].children, 'y');
  });

  it('should have the endOfWord return false if it is not the end of the word', () => {
    complete.insert('hey');

    assert.equal(complete.root.children['h'].children['e'].endOfWord, false);
  });

  it('should have the endOfWord return false if it is not the end of the word', () => {
    complete.insert('hey');

    assert.equal(complete.root.children['h'].children['e'].children['y'].endOfWord, true);
  });

  it('should have a dictionary with the length of 235886', () => {
    let completion = new CompleteMe();
    const text     = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    completion.populate(dictionary);

    assert.equal(completion.count(), 235886);
  });

});
