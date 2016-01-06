import test from 'tape';
import inflect from '../index.js';


test('camelize', nested => {
  nested.test('camelize string:',
    assert => {
      const actual = inflect.camelize('message_properties');
      const expect = 'MessageProperties';


      assert.equal(actual, expect,
        'should camelize string');

      assert.end();
    });

  nested.test('camelize string override:',
    assert => {
      const actual = inflect.camelize('message_properties', {
        override: true
      });
      const expect = 'messageProperties';

      assert.equal(actual, expect,
        'should camelize have first letter in lowercase');

      assert.end();
    });

  nested.test('camelize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.camelize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'OtisVirginie'},
        {fullName: 'AniaZeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should camelize collection value');

      assert.end();
    });

  nested.test('camelize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.camelize(data, {
        override: true,
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'otisVirginie'},
        {fullName: 'aniaZeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should camelize collection value');

      assert.end();
    });
});
