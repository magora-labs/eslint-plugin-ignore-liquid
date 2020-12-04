'use strict';

// takes text of the file and filename
const preprocess = (text, filename) => {
  // here, you can strip out any non-JS content
  // and split into multiple strings to lint
  var replaced = text
    .replace(/{%(.*?)%}/g, '/* Ignore Liquid Block */')
    .replace(/{{(.*?)}}/g, '() => {/* Ingore Liquid Variable */}');

  return [replaced];  // return an array of strings to lint
};

// takes a Message[][] and filename
const postprocess = (messages, filename) => {
  // `messages` argument contains two-dimensional array of Message objects
  // where each top-level array item contains array of lint messages related
  // to the text that was returned in array from preprocess() method

  // you need to return a one-dimensional array of the messages you want to keep
  return messages[0];
};

// import processors - liquid can be used in multiple file types.
module.exports.processors = {
  '.html': {preprocess, postprocess},
  '.js': {preprocess, postprocess},
  '.css': {preprocess, postprocess},
  '.liquid': {preprocess, postprocess}
};
