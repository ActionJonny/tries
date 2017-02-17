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

  it('should be able to find the first letter' , () => {
    complete.insert('hello');
    assert.property(complete.root.children, 'h');
  });

  it('should be able to split and find the second letter' , () => {
    complete.insert('hello');

    assert.property(complete.root.children['h'].children, 'e');
  });

  it('should be able to split and find the last letter' , () => {
    complete.insert('hey');

    assert.property(complete.root.children['h'].children['e'].children, 'y');
  });

  it('should have the endOfWord return false if it is not the end of the word', () => {
    complete.insert('hey');

    assert.equal(complete.root.children['h'].children['e'].endOfWord, false);
  });

  it('should have the endOfWord return true if it is not the end of the word', () => {
    complete.insert('hey');

    assert.equal(complete.root.children['h'].children['e'].children['y'].endOfWord, true);
  });

  it('should be able to count the words inputted', () => {
    complete.insert('something');
    complete.insert('hello');

    assert.equal(complete.count(), 2);
  });

  it('should be able to suggest words', () => {
    complete.insert('something');
    complete.insert('hello');
    complete.insert('hell');

    complete.suggest('he');

    assert.deepEqual(complete.suggestions, ['hell', 'hello']);
  });

  it('should return an empty array if their is not a match', () => {
    complete.insert('something');
    complete.insert('hello');
    complete.insert('hell');

    complete.suggest('pi');

    assert.deepEqual(complete.suggestions, []);
  });

  it('should have a dictionary with the length of 235886', () => {
    let completion = new CompleteMe();
    const text     = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    completion.populate(dictionary);

    assert.equal(completion.count(), 235886);
  });

});
