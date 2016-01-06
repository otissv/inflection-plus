import test from 'tape';
import inflect from '../index.js';


test('classify', nested => {
  nested.test('classify string:',
    assert => {
      const actual = inflect.classify('message_bus_properties');
      const expect = 'MessageBusProperty';


      assert.equal(actual, expect,
        'should classify string');

      assert.end();
    });


  nested.test('classify array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.classify(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'OtisVirginie'},
        {fullName: 'AniaZeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should classify collection value');

      assert.end();
    });
});
