import { render } from 'enzyme';
import React from 'react';
import { List } from 'antd';
import LogDiff from '../../src/index';

describe('BasicLogDiff', () => {
  it('🎏 base use', () => {
    const initalData = {
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
    }
    const html = render(
      <LogDiff
        data={initalData}
      >
        <LogDiff.Input label="合同名称" name={['basic', 'name']} />
        <LogDiff.Image label="身份证人像面照片" name={['basic', 'url']} />
        <LogDiff.Radio label="有效期限是否长期" name={['basic', 'is_long']} />
      </LogDiff>,
    );
    expect(html).toMatchSnapshot();
  });

  it('🎏 Combination use ', () => {
    const initalData = {
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
    }

    const html = render(
      <LogDiff
        data={initalData}
      >
        <LogDiff.Input label="期间" name={[['basic', 'start'], ['basic', 'end']]} />
      </LogDiff>,
    );
    expect(html).toMatchSnapshot();
  });

  it('🎏 list use ', () => {
    const initalData = {
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
    
    const businessDetailData = [0, 1];

    const html = render(
      <LogDiff
        data={initalData}
      >
        <List
          size="small"
          bordered
          dataSource={businessDetailData}
          renderItem={item => (
            <List.Item
            >
              <LogDiff.Radio label="地区" name={['business', 'details', item, 'area']} />
              <LogDiff.Input label="证书" name={['business', 'details', item, 'license']} />
            </List.Item>
          )}
        />
      </LogDiff>,
    );
    expect(html).toMatchSnapshot();
  });
});
