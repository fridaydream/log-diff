import '../index.less';
import React, { useContext } from 'react';
import classNames from 'classnames';
import warning from 'rc-util/lib/warning';
import isEqual from 'lodash.isequal';
import DiffContext from '../Context';
import { RenderLabel, RenderContent } from '../Content';
import { ItemProps, NamePath, NestedArray, Store } from '../interface';
import { getArrayLast, getValue } from '../valueUtil';

const getArrayValue = (value: Store, name: NamePath) => {
  const result = getValue(value, name);
  if (Array.isArray(result)) {
    return result;
  }
  if (typeof result === 'string') {
    return [result];
  }
  return [];
};

const Radio = (props: ItemProps) => {
  const { before, after, constants } = useContext(DiffContext);
  const { label, name, constants: radioConstants, ...rest } = props;
  const constantsResult = { ...constants, ...radioConstants };
  const hasArray = name.some((item: any) => Array.isArray(item));
  if (hasArray) {
    // 映射类型暂时不支持多维数组
    warning(false, '`Radio` type do not support Array');
    return null;
  }

  const IteratorValue = (values: NestedArray<string>): React.ReactNode => {
    if (values.length === 0) {
      return '-';
    }
    return values.map((value) => {
      return (
        <span className={classNames('log-diff-space')} key={`${value}`}>
          {value && constantsResult[getArrayLast(name as NamePath)]
            ? constantsResult[getArrayLast(name as NamePath)][value]
            : ''}
        </span>
      );
    });
  };

  const beforeValue = getArrayValue(before, name as NamePath);
  const afterValue = getArrayValue(after, name as NamePath);
  const isSame = isEqual(beforeValue, afterValue);

  return (
    <div className={classNames('log-diff-space-divide')} {...rest}>
      <RenderLabel isSame={isSame} label={label} />
      <RenderContent
        isSame={isSame}
        beforeNode={IteratorValue(beforeValue)}
        afterNode={IteratorValue(afterValue)}
      />
    </div>
  );
};

export default Radio;
