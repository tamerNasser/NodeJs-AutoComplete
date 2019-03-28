# NodeJs AutoComplete Search :bulb:

## [NodeJs AutoComplete Search Website](https://tamkarnodejs.herokuapp.com)


### What?/About the project
Auto complete using Node.js.
A simple application with an input field, auto completes(suggests) relevant inputs for the user. 
Clicking on search/pressing enter will redirect you to google search.
It has an amazing team-work story, we had a string that contains 10,000 English words.
We converted the string to array, then looped on the array and sorted the words in objects relativily to it's first character.
So we made an object, that has 26 keys A-Z, each key(letter) got an object as value, and all the words that starts with 'key' character will be in the value. 

### Main Goals
- [ ] We expect back-end testing using tape (test as many components as you can) and basic front-end testing. :white_check_mark:
- [x] Host your project on heroku. :rocket:
- [x] Use module.exports and require to break a single large server file into smaller modules.
- [x] A good server file structure.

### Our Goals
- [x] A good project file structure. 
- [x] Adding localstorage to save the user history.
- [x] Using fetch instead of xhr.
- [x] History Search through using localStorage Web API.
- [x] Reading huge txt file of words and sort it in object.
- [x] Very short load time.
- [x] Dynamic and fast autocomplete suggestions.
- [x] Autocomplete each time you start new word(Not only for the first word).
- [x] Clean project software architecture.
- [ ] Auto complete senteces.
- [ ] Error handling.
- [x] ES6 only.
- [x] Works on mobile. :iphone:

### Software architecture :construction: :building_construction:
![](https://github.com/facn5/NodeJs-AutoComplete/blob/master/repoAssets/arch.jpeg)


### Coverage testing
![](https://github.com/facn5/NodeJs-AutoComplete/blob/master/repoAssets/coverageBackend.png)

### Things to share
- Making your own algorithim to build a JSON file for your words will make your life easier. :card_file_box:
How we parse text file to JSON object which is alphabet structured: [Click me](https://github.com/facn5/NodeJs-AutoComplete/blob/master/wordssetup.js)



### Tools/technologies used
* LocalStorage Web API - To save history.
* Heroku - For deploying/hosting.
* Tape - for testing.
* nyc - for testing.
* nodemon - for hosting localy.
* Tamer & Karam's dictionary generator - to convert a large text to JSON organized object.
* Node.js - backend.



