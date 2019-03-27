const test = require('tape');
const getWords = require('../backend/logic.js');

test('Getting auto complete words', (t) => {
  t.deepEqual(getWords.getAutoCompleteWords(['a','aa','abb','awww'],'a'), ['a','aa','abb','awww'], "Getting words starts with same letter");
  t.deepEqual(getWords.getAutoCompleteWords(['a','aba','abb','awww'],'ab'), ['aba','abb'], "Start with same two letters");
  t.deepEqual(getWords.getAutoCompleteWords(['ab','aba','abab','awww'],'aba'), ['aba','abab'], "Start with same three letters");
  t.deepEqual(getWords.getAutoCompleteWords(['asf','asff','aasff','fe'],'asf'), ['asf','asff'], "Start with same three letters");
  t.deepEqual(getWords.getAutoCompleteWords(['a','aba','abb','awww'],'ye'), [], "No results return empty array");
  t.deepEqual(getWords.getAutoCompleteWords(['a','ab','ac','ad','ae','af','ag','ah'],'a'), ['a','ab','ac','ad','ae','af'], "Return only 6 relevant words");
  t.end();
})
