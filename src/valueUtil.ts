import get from 'rc-util/lib/utils/get';
import isEqual from 'lodash.isequal';
import { Store, Content, NamePath } from './interface';

export function getValue(store: Store, namePath: NamePath) {
  const value = get(store, namePath);
  return value;
}

export function getArrayLast(arr: (string | number)[]) {
  return arr[arr.length - 1];
}

export function getPathNameData(before: Content, after: Content, name: NamePath | NamePath[]) {
  const isAllArray = name.every((item: any) => Array.isArray(item));
  let isSame = true;
  let beforeValueResult: string[] = [];
  let afterValueResult: string[] = [];
  if (isAllArray) {
    name.forEach((item: any) => {
      const beforeValue = getValue(before, item);
      const afterValue = getValue(after, item);
      // eslint-disable-next-line no-unused-expressions
      beforeValue && beforeValueResult.push(beforeValue);
      // eslint-disable-next-line no-unused-expressions
      afterValue && afterValueResult.push(afterValue);
      if (!isEqual(beforeValue, afterValue)) {
        isSame = false;
      }
    });
  } else {
    const beforeValue = getValue(before, name as NamePath);
    const afterValue = getValue(after, name as NamePath);
    isSame = isEqual(beforeValue, afterValue);
    beforeValueResult = beforeValue ? [beforeValue] : [];
    afterValueResult = afterValue ? [afterValue] : [];
  }
  return {
    isSame,
    beforeValue: beforeValueResult,
    afterValue: afterValueResult,
  };
}
