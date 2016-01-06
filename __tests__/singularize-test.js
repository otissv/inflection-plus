import test from 'tape';
import inflect from '../index.js';

test('singularize', nested => {
  nested.test('singularize string:',
    assert => {
      const actual = inflect.singularize('people');
      const expect = 'person';


      assert.equal(actual, expect,
        'should singularize string');

      assert.end();
    });

  nested.test('singularize string overide:',
    assert => {
      const actual = inflect.singularize('people', {
        override: 'human'
      });
      const expect = 'human';

      assert.equal(actual, expect,
        'should singularize string');

      assert.end();
    });

  nested.test('singularize array:',
    assert => {
      const data = [
        {firstName: 'otis', type: 'people'},
        {firstName: 'ania', type: 'people'}
      ];

      const actual = inflect.singularize(data, {
        keys: 'type'
      });


      const expect = [
        {firstName: 'otis', type: 'person'},
        {firstName: 'ania', type: 'person'}
      ];


      assert.deepEqual(actual, expect,
        'should singularize collection value');

      assert.end();
    });


  nested.test('singularize array override:',
    assert => {
      const data = [
        {firstName: 'otis', type: 'people'},
        {firstName: 'ania', type: 'people'}
      ];

      const actual = inflect.singularize(data, {
        override: 'human',
        keys: 'type'
      });


      const expect = [
        {firstName: 'otis', type: 'human'},
        {firstName: 'ania', type: 'human'}
      ];


      assert.deepEqual(actual, expect,
        'should override singularize collection value');

      assert.end();
    });
});
