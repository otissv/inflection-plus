import test from 'tape';
import inflect from '../index.js';


test('dasherize', nested => {
  nested.test('dasherize string:',
    assert => {
      const actual = inflect.dasherize('message_properties');
      const expect = 'message-properties';


      assert.equal(actual, expect,
        'should dasherize string');

      assert.end();
    });

  nested.test('dasherize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.dasherize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'otis-virginie'},
        {fullName: 'ania-zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should dasherize collection value');

      assert.end();
    });
});
