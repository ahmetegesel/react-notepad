import { curry, mergeRight } from 'ramda';

const toJson = (val) => val.json();

export const request = curry((baseUrl, url, options) => {
  const defaultOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  const finalOptions = mergeRight(defaultOptions, options);

  if (finalOptions.body) {
    finalOptions.body = JSON.stringify(finalOptions.body);
  }

  return fetch(baseUrl + url, finalOptions).then(toJson);
});

export const get = curry((baseUrl, url, options) => {
    const defaultOptions = {
      method: 'GET'
    };

    return request(baseUrl, url, mergeRight(defaultOptions, options));
  }
);

export const post = curry((baseUrl, url, options) => {
    const defaultOptions = {
      method: 'POST'
    };

    return request(baseUrl, url, mergeRight(defaultOptions, options));
  }
);
