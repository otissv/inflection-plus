import test from 'tape';
import inflect from '../index.js';


test('humanize', nested => {
  nested.test('humanize string:',
    assert => {
      const actual = inflect.humanize('message_properties');
      const expect = 'Message properties';


      assert.equal(actual, expect,
        'should humanize string');

      assert.end();
    });

  nested.test('humanize string override:',
    assert => {
      const actual = inflect.humanize('message_properties', {
        override: true
      });
      const expect = 'message properties';

      assert.equal(actual, expect,
        'should humanize have first letter in lowercase');

      assert.end();
    });

  nested.test('humanize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.humanize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'Otis virginie'},
        {fullName: 'Ania zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should humanize collection value');

      assert.end();
    });

  nested.test('humanize array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.humanize(data, {
        override: true,
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'otis virginie'},
        {fullName: 'ania zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should humanize collection value');

      assert.end();
    });
});
