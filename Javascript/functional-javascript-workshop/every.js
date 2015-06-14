function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(su){
        if (goodUsers.some(function(gu){
          return gu.id === su.id;
        }))return true;
        else return false;

      })
    };
  }

  module.exports = checkUsersValid
