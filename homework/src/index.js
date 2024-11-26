class Greeter {

    static greet(names = []) {
      if (names.length === 0) {
        return 'Hello, my friend.';
      }
  
      let allNames = [];
      for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.indexOf(',') !== -1) {
          let splitNames = name.split(',');
          for (let j = 0; j < splitNames.length; j++) {
            allNames.push(splitNames[j].trim());
          }
        } else {
          allNames.push(name);
        }
      }
  
      let normalNames = [];
      let shoutingNames = [];
      for (let i = 0; i < allNames.length; i++) {
        let name = allNames[i];
        if (name === name.toUpperCase()) {
          shoutingNames.push(name);
        } else {
          normalNames.push(name);
        }
      }
  
      let normalGreeting = '';
      let shoutingGreeting = '';
  
      if (normalNames.length > 0) {
        normalGreeting = 'Hello ' + this.formatNames(normalNames) + '.';
      }
      if (shoutingNames.length > 0) {
        shoutingGreeting = 'HELLO ' + this.formatNames(shoutingNames).toUpperCase() + '!';
      }
  
      return normalGreeting.trim() + (normalGreeting && shoutingGreeting ? ' ' : '') + shoutingGreeting.trim();
    }
  
    static formatNames(names) {
      if (names.length === 1) {
        return names[0];
      }
      let lastName = names[names.length - 1];
      let otherNames = names.slice(0, names.length - 1);
      return otherNames.join(', ') + ' and ' + lastName;
    }
  }
  
  module.exports = Greeter;