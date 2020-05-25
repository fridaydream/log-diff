import React, { useState, useEffect } from 'react';
import { isEqual, range } from 'lodash';

import { Typography, List} from 'antd';
import LogDiff from 'log-diff';

import styles from './index.css';

const { Title, Text } = Typography;

const getMaxLength = (value1?: Object[], value2?: Object[]) => {
  const len1 = value1?.length || 0;
  const len2 = value2?.length || 0;
  return Math.max(len1, len2);
};

const Demo = () => {
  const [initalData, setData] = useState({
    before: {
      business: {
        details: [
          {
            area: []
          }
        ],
      }
    },
    after: {
      business: {
        details: [
          {
            area: []
          }
        ],
      }
    },
    constants: {},
  })
  useEffect(() => {
    setTimeout(() => {
      const data = {
        before: {
          business: {
            details: [
              {
                area: [ 'tc311y', 'tc755y' ],
                license: 'a287'
              },
              {
                area: [
                  'tc755y'
                ],
                license: 'a273'
              }
            ],
          },
        },
        after: {
          business: {
            details: [
            ],
          },
        },
        constants: {
          area: {
            'tc311y': '北京',
            'tc755y': '上海',
          }
        },
      }
      setData(data as any)
    }, 1000);
  }, []);
  const {
    before,
    after,
  } = initalData;
  const businessDetailData = range(getMaxLength(before.business.details, after.business.details));
  return (
    <LogDiff
      data={initalData}
    >
      <Title level={2} style={{ marginBottom: 32 }}>
        业务信息
      </Title>
      <Text className={styles.ListLabel}>
        <span
          className={
            !isEqual(before.business.details, after.business.details) ? styles.labelSign : ''
          }
        >
          合作维度
        </span>
      </Text>
      <List
        size="small"
        bordered
        className={styles.list}
        dataSource={businessDetailData}
        renderItem={item => (
          <List.Item
            className={styles.listItem}
          >
            <LogDiff.Radio label="地区" name={['business', 'details', item, 'area']} />
            <LogDiff.Input label="证书" name={['business', 'details', item, 'license']} />
          </List.Item>
        )}
      />
    </LogDiff>
  )
}
export default Demo