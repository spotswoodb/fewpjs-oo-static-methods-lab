class Formatter {
  //add static methods here

  // write a method static capitalize that takes in a string and capitalizes the first letter
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes
  // single quotes and spaces
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  //write a method static titleize that takes in a string and capitalizes all words in a
  // sentence except the a, an, but, of, and, for, at, by and from; always cap the first word
  static titleize(sentence) {
    // defines the exceptions so we exclude them from capitalization
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // store the result in an empty array
    let result = [];
    // define an array of words from the sentence argument that passed through by splitting them up in the array
    let arrayOfWords = sentence.split( " " )
    // as long as n is less than the length of the array of words, keep iterating
    for (let n = 0; n < arrayOfWords.length; n++) {
     // if there are no 
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        if ( exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }
    }
    return result.join(" ")
  }
}

   // i think what all of this is saying is if there's only one value inside the array, capitalize it,
        // if there's more than one, check it for exceptions first, push those through without capitalizing
        // if it doesn't, capitalize all the words and put those through