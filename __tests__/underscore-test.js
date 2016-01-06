import test from 'tape';
import inflect from '../index.js';


test('underscore', nested => {
  nested.test('underscore string:',
    assert => {
      const actual = inflect.underscore('MessageProperties');
      const expect = 'message_properties';


      assert.equal(actual, expect,
        'should underscore string');

      assert.end();
    });

  nested.test('underscore string override:',
    assert => {
      const actual = inflect.underscore('messageProperties', {
        override: true
      });
      const expect = 'message_properties';

      assert.equal(actual, expect,
        'should underscore have first letter in lowercase');

      assert.end();
    });

  nested.test('underscore array:',
    assert => {
      const data = [
        {fullName: 'otisVirginie'},
        {fullName: 'aniaZeyler'}
      ];

      const actual = inflect.underscore(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should underscore collection value');

      assert.end();
    });

  nested.test('underscore array:',
    assert => {
      const data = [
        {fullName: 'otisVirginie'},
        {fullName: 'aniaZeyler'}
      ];

      const actual = inflect.underscore(data, {
        override: true,
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should underscore collection value');

      assert.end();
    });
});
