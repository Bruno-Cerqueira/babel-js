export class Util {
  static dig(obj, searchedKey){
    let searchedValue;
    for (let key in obj){
      if(key === searchedKey) return searchedValue = obj[key];
      if(typeof obj[key] === 'object') searchedValue = Util.dig(obj[key], searchedKey)
    }
    return searchedValue;
  }

  static filterObj(obj, searchedKey){
    let filterObj = {};  
    for (let key in obj){
      if(searchedKey.includes(key)) filterObj[key] = obj[key]
    }
    return filterObj;
  }
}
