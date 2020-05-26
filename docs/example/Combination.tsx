import React, { useState, useEffect } from 'react';

import LogDiff from 'log-diff';
import { Typography } from 'antd';

const { Title } = Typography;

const Demo = () => {
  const [initalData, setData] = useState({
    before: {
    },
    after: {
    },
    constants: {},
  })
  useEffect(() => {
    setTimeout(() => {
      setData({
        before: {
          basic: {
            start: '2020-05-25',
            end: '2020-05-27',
          }
        },
        after: {
          basic: {
            start: '2020-05-28',
            end: '2020-05-29',
          }
        },
        constants: {
        },
      })
    }, 1000);
  }, []);
   return (
    <LogDiff
      data={initalData}
    >
      <Title level={3} style={{ marginBottom: 32 }}>
        基础信息
      </Title>
      <LogDiff.Input label="期间" name={[['basic', 'start'], ['basic', 'end']]} />
    </LogDiff>
  )
}
export default Demo