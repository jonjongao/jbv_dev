export default {
  getSpaceCount: function (str) {
    var space = 0;
    var i = 0;
    var character = '';
    //console.log("length of " + str + " = " + str.length);
    while (i < str.length) {
      character = str.charAt(i);
      /*if (!isNaN(character * 1)) {
        console.log(character + " is number");
        space++;
      } else*/
      if (character.match(/\s/) ||
        character.match(/\/$/) ||
        character.match(/[.,:!?]/) ||
        character == '[' ||
        character == ']') {
        //console.log(character + " is special");
        space++;
      } else {
        if (character == character.toUpperCase()) {
          //console.log(character + " is UpperCase");
          space += 2;
        } else if (character == character.toLowerCase()) {
          //console.log(character + " is LowerCase");
          space++;
        }
      }
      i++;
    }
    console.log("Space of " + str + " = " + space);
    return space;
  }
}
