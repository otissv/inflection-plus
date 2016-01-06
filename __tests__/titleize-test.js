import test from 'tape';
import inflect from '../index.js';


test('titleize', nested => {
  nested.test('titleize string:',
    assert => {
      const actual = inflect.titleize('message_properties');
      const expect = 'Message Properties';


      assert.equal(actual, expect,
        'should titleize string');

      assert.end();
    });


  nested.test('titleize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.titleize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'Otis Virginie'},
        {fullName: 'Ania Zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should titleize collection value');

      assert.end();
    });
});
