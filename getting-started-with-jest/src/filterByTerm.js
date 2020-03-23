
function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) return "searchTerm cannot be empty";
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    })
}
module.exports = filterByTerm