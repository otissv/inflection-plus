import test from 'tape';
import inflect from '../index.js';


test('tableize', nested => {
  nested.test('tableize string:',
    assert => {
      const actual = inflect.tableize('MessageBusProperty');
      const expect = 'message_bus_properties';


      assert.equal(actual, expect,
        'should tableize string');

      assert.end();
    });


  nested.test('tableize array:',
    assert => {
      const data = [
        {fullName: 'OtisVirginie'},
        {fullName: 'AniaZeyler'}
      ];

      const actual = inflect.tableize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'otis_virginies'},
        {fullName: 'ania_zeylers'}
      ];


      assert.deepEqual(actual, expect,
        'should tableize collection value');

      assert.end();
    });
});
