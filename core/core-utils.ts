/*--------------------------------------------------------------------
Utility functions
----------------------------------------------------------------------*/

/**
 * bind all functions relative to the object passed in
 * @param context the instance of a class
 */
const _bindAll = (obj: any) => {
    for (const key of Object.getOwnPropertyNames(obj.constructor.prototype)) {
      const val = obj[key];
  
      if (key !== 'constructor' && typeof val === 'function') {
        obj[key] = val.bind(obj);
      }
    }
  
    return obj;
  };
  
  /**
   * the first item that is not null or undefined will be returned
   * @param values all values to evaluate
   */
  const _coalesce = (...values: any[]): any => {
      let value = null;
  
      if (_collectionIsEmpty(values)) {
        return value;
      }
  
      do {
          value = values.shift();
      } while (values.length > 0 && _isNullOrUndefined(value));
  
      return value;
  };
  
  const _collectionHasItems = (collection: any[]): boolean => {
    return _isNotNullOrUndefined(collection) && collection.length > 0;
  };
  
  const _collectionIsEmpty = (collection: any[]): boolean => {
    return _isNullOrUndefined(collection) || collection.length === 0;
  };
  
  const _isNullOrUndefined = (value: any): boolean => {
      return value == null || value == undefined;
  };
  
  const _isNotNullOrUndefined = (value: any): boolean => {
      return ! _isNullOrUndefined(value);
  };
  
  export const CoreUtils = {
      bindAll:              _bindAll,
      coalesce:             _coalesce,
      collectionHasItems:   _collectionHasItems,
      collectionIsEmpty:    _collectionIsEmpty,
      isNotNullOrUndefined: _isNotNullOrUndefined,
      isNullOrUndefined:    _isNullOrUndefined,
  };
  