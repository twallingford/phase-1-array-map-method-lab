const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function (title) {
      let upperTitle = [];
          for(let letter in title){
              if(letter == 0){
                  upperTitle.push(title[letter].toUpperCase())
              }
              else if(title[letter-1] === ' '){
                  upperTitle.push(title[letter].toUpperCase())
              }
              else{
                  upperTitle.push(title[letter])
              }
          }
      return upperTitle.join('')
      })
}