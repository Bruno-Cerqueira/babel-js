export class Util {
  static dig(obj: Record<string, any>, searchedKey: string): any {
    let searchedValue;
    for (const key in obj) {
      if (key === searchedKey) return (searchedValue = obj[key]);
      if (typeof obj[key] === 'object')
        searchedValue = Util.dig(obj[key], searchedKey);
    }
    return searchedValue;
  }

  static filterObj(obj: Record<string, any>, searchedKeys: string[]): any {
    const filterObj = {};
    for (const key in obj) {
      if (searchedKeys.includes(key)) filterObj[key] = obj[key];
    }
    return filterObj;
  }
}
