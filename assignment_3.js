//To find the length of the last word in a string
let lengthValue ;
let lengthValue2 ;
function lengthOfLastValue(givenSentence)
{
    let trimmedString = givenSentence.trim();
   let stringArray = trimmedString.split(' ');
   lengthValue = stringArray.length;
   let lastWord = stringArray[lengthValue-1];
   console.log(lastWord, lastWord.length);
}
lengthOfLastValue("Hello World");
lengthOfLastValue("fly me to the moon");
lengthOfLastValue("luffy is still joyboy");