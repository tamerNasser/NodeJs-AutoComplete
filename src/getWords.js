

const getAutoCompleteWords = (objectKeys,search) => {
  return objectKeys.reduce((acc, currentObj) => {
    if (acc === undefined || acc.length < 6)
      if (search === currentObj.substr(0, search.length))
        return acc.concat(currentObj)
      return acc
  }, [])
}

module.exports = {
  getAutoCompleteWords
}
