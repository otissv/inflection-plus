import test from 'tape';
import inflect from '../index.js';


test('capitalize', nested => {
  nested.test('capitalize string:',
    assert => {
      const actual = inflect.capitalize('message_properties');
      const expect = 'Message_properties';


      assert.equal(actual, expect,
        'should capitalize string');

      assert.end();
    });


  nested.test('capitalize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.capitalize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'Otis_virginie'},
        {fullName: 'Ania_zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should capitalize collection value');

      assert.end();
    });
});
