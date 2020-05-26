import './index.less';
import React from 'react';
import { Typography } from 'antd';
import classNames from 'classnames';

import { LabelProps, ContentProps } from './interface'

const { Text } = Typography;

const RenderLabel = ({label, isSame}: LabelProps) => (
  <Text className={classNames('log-diff-item-label')}>
    <span className={classNames({'label-sign': !isSame})}>
      {
        label || '--'
      }
    </span>
  </Text>
);

const RenderContent = ({beforeNode, afterNode, isSame}: ContentProps) => (
  <Text>
    <span className={classNames({'pass': !isSame}, 'space')}>
      {
        beforeNode
      }
    </span>
    {
      !isSame && <span className={classNames('now')}>
        {
          afterNode
        }
      </span>
    }
  </Text>
)

export {
  RenderLabel,
  RenderContent,
}