import '../index.less';
import React, { useContext } from 'react';
import classNames from 'classnames';
import DiffContext from '../Context'
import { RenderLabel, RenderContent } from '../Content'
import { ItemProps, NestedArray } from '../interface'
import { getPathNameData } from '../valueUtil'

const IteratorValue = (values: NestedArray<string>): React.ReactNode => {
  if (values.length === 0) {
    return '-';
  }
  return values.map((value, index) => {
    if (Array.isArray(value)) {
      return IteratorValue(value)
    }
    return (
      // eslint-disable-next-line react/no-array-index-key
      <span className={classNames('space')} key={`${value}${index}`}>
        {
          value
        }
      </span>
    )
  })
}

const Input = (props: ItemProps) => {
  const { before, after } = useContext(DiffContext);
  const {
    label,
    name,
    className: propsClassName,
  } = props;
  const {
    isSame,
    beforeValue,
    afterValue,
  } = getPathNameData(before, after, name);
  return (
    <div className={classNames('space-divide', propsClassName)}>
      <RenderLabel isSame={isSame} label={label} />
      <RenderContent
        isSame={isSame}
        beforeNode={
          IteratorValue(beforeValue)
        }
        afterNode={
          IteratorValue(afterValue)
        }
      />
    </div>
  )
}

export default Input;
