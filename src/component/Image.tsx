import '../index.less';
import React, { useContext } from 'react';
import classNames from 'classnames';
import DiffContext from '../Context';
import { RenderLabel, RenderContent } from '../Content';
import { ItemProps } from '../interface';
import { getPathNameData } from '../valueUtil';

const Image = (props: ItemProps) => {
  const { before, after } = useContext(DiffContext);
  const { label, name, ...rest } = props;
  const { isSame, beforeValue, afterValue } = getPathNameData(before, after, name);
  return (
    <div className={classNames('log-diff-space-divide')} {...rest}>
      <RenderLabel isSame={isSame} label={label} />
      <RenderContent
        isSame={isSame}
        beforeNode={
          beforeValue.length
            ? beforeValue.map((li) => (
                <a href={li} key={li}>
                  {li}
                </a>
              ))
            : '-'
        }
        afterNode={
          afterValue.length
            ? afterValue.map((li) => (
                <a href={li} key={li}>
                  {li}
                </a>
              ))
            : '-'
        }
      />
    </div>
  );
};

export default Image;
