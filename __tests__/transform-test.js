import test from 'tape';
import inflect from '../index.js';


test('transform', nested => {
  nested.test('transform string:',
    assert => {
      const actual = inflect.transform('all job', {jobs: ['pluralize', 'capitalize', 'dasherize']});
      const expect = 'All-jobs';


      assert.equal(actual, expect,
        'should transform string');

      assert.end();
    });

  nested.test('transform array:',
    assert => {
      const data = [
        {fullName: 'otis_virginie'},
        {fullName: 'ania_zeyler'}
      ];

      const actual = inflect.transform(data, {
        jobs: ['humanize', 'titleize'],
        keys: 'fullName'
      });


      const expect = [
        {fullName: 'Otis Virginie'},
        {fullName: 'Ania Zeyler'}
      ];


      assert.deepEqual(actual, expect,
        'should transform collection value');

      assert.end();
    });
});
