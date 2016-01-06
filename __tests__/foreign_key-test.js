import test from 'tape';
import inflect from '../index.js';


test('foreign_key', nested => {
  nested.test('foreign_key string:',
    assert => {
      const actual = inflect.foreign_key('MessageBusProperty');
      const expect = 'message_bus_property_id';


      assert.equal(actual, expect,
        'should foreign_key string');

      assert.end();
    });

  nested.test('foreign_key string overide:',
    assert => {
      const actual = inflect.foreign_key('person', {
        override: true
      });
      const expect = 'personid';

      assert.equal(actual, expect,
        'should foreign_key string');

      assert.end();
    });

  nested.test('foreign_key array:',
    assert => {
      const data = [
        {firstName: 'otis', id: 'person'},
        {firstName: 'ania', id: 'person'}
      ];

      const actual = inflect.foreign_key(data, {
        keys: 'id'
      });

      const expect = [
        {firstName: 'otis', id: 'person_id'},
        {firstName: 'ania', id: 'person_id'}
      ];


      assert.deepEqual(actual, expect,
        'should foreign_key collection value');

      assert.end();
    });

  nested.test('foreign_key array overide:',
    assert => {
      const data = [
        {firstName: 'otis', id: 'person'},
        {firstName: 'ania', id: 'person'}
      ];

      const actual = inflect.foreign_key(data, {
        override: true,
        keys: 'id'
      });


      const expect = [
        {firstName: 'otis', id: 'personid'},
        {firstName: 'ania', id: 'personid'}
      ];


      assert.deepEqual(actual, expect,
        'should foreign_key collection value');

      assert.end();
    });
});
