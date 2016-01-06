var inflection = require('inflection');

const create = (property, data, opts) => {
  const key = opts ? opts.keys : null;
  const override = opts ? opts.override : null;


  if (Array.isArray(data)) {
    return data.map(item => {
      if (item[key]) {
        const obj = {};

        obj[key] = override ? inflection[property](item[key], override) : inflection[property](item[key]);
        return Object.assign({}, item, obj);

      } else {
        return item;
      }

    });

  } else {
    return override ? inflection[property](data, override) : inflection[property](data);
  }
};


const transform = (data, opts) => {
  const key = opts ? opts.keys : null;
  const jobs = opts ? opts.jobs : null;

  if (Array.isArray(data)) {
    return data.map(item => {
      if (item[key]) {
        const obj = {};

        obj[key] = inflection.transform(item[key], jobs);
        return Object.assign({}, item, obj);

      } else {
        return item;
      }

    });

  } else {
    return inflection.transform(data, jobs);
  }
};


var inflect = {
  pluralize: (data, opts) => create('pluralize', data, opts),
  singularize: (data, opts) => create('singularize', data, opts),
  camelize: (data, opts) => create('camelize', data, opts),
  underscore: (data, opts) => create('underscore', data, opts),
  humanize: (data, opts) => create('humanize', data, opts),
  capitalize: (data, opts) => create('capitalize', data, opts),
  dasherize: (data, opts) => create('dasherize', data, opts),
  titleize: (data, opts) => create('titleize', data, opts),
  demodulize: (data, opts) => create('demodulize', data, opts),
  tableize: (data, opts) => create('tableize', data, opts),
  classify: (data, opts) => create('classify', data, opts),
  foreign_key: (data, opts) => create('foreign_key', data, opts),
  ordinalize: (data, opts) => create('ordinalize', data, opts),
  transform: (data, jobs) => transform(data, jobs)
};


export default inflect;
