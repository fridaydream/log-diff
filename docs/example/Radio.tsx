import React, { useState, useEffect } from 'react';

import LogDiff from 'log-diff';
import { Typography } from 'antd';

const { Title } = Typography;

const Demo = () => {
  const [initalData, setData] = useState({
    before: {},
    after: {},
    constants: {},
  });
  useEffect(() => {
    setTimeout(() => {
      setData({
        before: {
          basic: {
            is_long: '0',
          },
        },
        after: {
          basic: {
            is_long: '1',
          },
        },
        constants: {
          is_long: {
            '0': '否',
            '1': '是',
          },
        },
      });
    }, 1000);
  }, []);
  return (
    <LogDiff data={initalData}>
      <Title level={3} style={{ marginBottom: 32 }}>
        基础信息
      </Title>
      <LogDiff.Radio
        label="有效期限是否长期"
        name={['basic', 'is_long']}
        constants={{
          is_long: {
            '1': '否',
            '0': '是',
          },
        }}
      />
    </LogDiff>
  );
};
export default Demo;
