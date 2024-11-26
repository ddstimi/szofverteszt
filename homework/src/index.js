class Greeter {

    static greet(names = []) {
      if (names.length === 0) {
        return 'Hello, my friend.';
      }
  
      const allNames = [];
      for (const name of names) {
        if (name.includes(',')) {
          allNames.push.apply(allNames, name.split(',').map(n => n.trim()));
        } else {
          allNames.push(name);
        }
      }
  
      const normalNames = allNames.filter(name => name !== name.toUpperCase());
      const shoutingNames = allNames.filter(name => name === name.toUpperCase());

      var normalGreeting = '';
      var shoutingGreeting = '';

      if(normalNames.length > 0){
        normalGreeting = `Hello ${this.formatNames(normalNames)}.`
      }
      if(shoutingNames.length > 0){
        shoutingGreeting = `HELLO ${this.formatNames(shoutingNames).toUpperCase()}!`;
      }

      return [normalGreeting, shoutingGreeting].filter(Boolean).join(' ');
    }
  

    static formatNames(names) {
      if (names.length === 1) {
        return names[0];
      }
      const lastName = names.pop();
      return `${names.join(', ')} and ${lastName}`;
    }
  }
  
  module.exports = Greeter;