function getShortMessages(messages) {
      return messages.filter(function(item){

        return item.message.length < 50;
      }).map(function(item){
        return item.message;
      });
    }

    module.exports = getShortMessages

var mes = [
  {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
  },
  {
      message: 'Lore' // random
  },
  {
      message: 'te officia ipsum.' // random
  }
];

console.log (getShortMessages(mes));
