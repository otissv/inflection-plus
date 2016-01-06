import test from 'tape';
import inflect from '../index.js';


test('ordinalize', nested => {
  nested.test('ordinalize string:',
    assert => {
      const actual = inflect.ordinalize('the 1 pitch');
      const expect = 'the 1st pitch';


      assert.equal(actual, expect,
        'should ordinalize string');

      assert.end();
    });

  nested.test('ordinalize array:',
    assert => {
      const data = [
        {firstName: 'otis', type: '1 name'},
        {firstName: 'ania', type: '1 name'}
      ];

      const actual = inflect.ordinalize(data, {
        keys: 'type'
      });


      const expect = [
        {firstName: 'otis', type: '1st name'},
        {firstName: 'ania', type: '1st name'}
      ];


      assert.deepEqual(actual, expect,
        'should ordinalize collection value');

      assert.end();
    });

});
