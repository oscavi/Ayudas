function countWords(inputWords) {
      countW={};
      inputWords.map(function(item){
        console.log(item);
        if(!countW[item]){
          countW[item]=1;
        }else countW[item]+=1;
      })
      return countW;
    }

    module.exports = countWords

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    console.log(countWords(inputWords));
