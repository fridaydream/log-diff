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
            name: '众包挂靠',
            url: 'http://erp-1258916733.cos.ap-shanghai.myqcloud.com/manage/temp/378bbd5adad4e1f0266518522c559e42.mov',
            is_long: '0',
          }
        },
        after: {
          basic: {
            is_long: '1',
          }
        },
        constants: {
          is_long: {
            '0': '否',
            '1': '是',
          }
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
      <LogDiff.Input label="合同名称" name={['basic', 'name']} />
      <LogDiff.Image label="身份证人像面照片" name={['basic', 'url']} />
      <LogDiff.Radio label="有效期限是否长期" name={['basic', 'is_long']} />
    </LogDiff>
  )
}
export default Demo