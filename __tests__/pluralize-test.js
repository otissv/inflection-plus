import test from 'tape';
import inflect from '../index.js';


test('pluralize', nested => {
  nested.test('pluralize string:',
    assert => {
      const actual = inflect.pluralize('person');
      const expect = 'people';


      assert.equal(actual, expect,
        'should pluralize string');

      assert.end();
    });

  nested.test('pluralize string overide:',
    assert => {
      const actual = inflect.pluralize('person', {
        override: 'guys'
      });
      const expect = 'guys';

      assert.equal(actual, expect,
        'should pluralize string');

      assert.end();
    });

  nested.test('pluralize array:',
    assert => {
      const data = [
        {firstName: 'otis', type: 'person'},
        {firstName: 'ania', type: 'person'}
      ];

      const actual = inflect.pluralize(data, {
        keys: 'type'
      });

      const expect = [
        {firstName: 'otis', type: 'people'},
        {firstName: 'ania', type: 'people'}
      ];


      assert.deepEqual(actual, expect,
        'should pluralize collection value');

      assert.end();
    });

  nested.test('pluralize array overide:',
    assert => {
      const data = [
        {firstName: 'otis', type: 'person'},
        {firstName: 'ania', type: 'person'}
      ];

      const actual = inflect.pluralize(data, {
        override: 'guys',
        keys: 'type'
      });


      const expect = [
        {firstName: 'otis', type: 'guys'},
        {firstName: 'ania', type: 'guys'}
      ];


      assert.deepEqual(actual, expect,
        'should pluralize collection value');

      assert.end();
    });
});
