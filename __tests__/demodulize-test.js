import test from 'tape';
import inflect from '../index.js';


test('demodulize', nested => {
  nested.test('demodulize string:',
    assert => {
      const actual = inflect.demodulize('Message::Bus::Properties');
      const expect = 'Properties';


      assert.equal(actual, expect,
        'should demodulize string');

      assert.end();
    });


  nested.test('demodulize array:',
    assert => {
      const data = [
        {fullName: 'Otis::Virginie'},
        {fullName: 'Ania::Zeyler'}
      ];

      const actual = inflect.demodulize(data, {
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'Virginie'},
        {fullName: 'Zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should demodulize collection value');

      assert.end();
    });
});
