const removeFromArray = function(array, ...itemsToRemove) {
    // itemsToRemove will now be an array of all arguments passed after 'array'
    for (let item of itemsToRemove) {
      let indexToRemove = array.indexOf(item);
      while (indexToRemove !== -1) { // Keep removing the item as long as it exists in the array
        array.splice(indexToRemove, 1);
        indexToRemove = array.indexOf(item);
      }
    }
    return array;
  };
  


module.exports = removeFromArray;
