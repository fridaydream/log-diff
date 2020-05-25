import React from 'react';
import Radio from './component/Radio';
import Input from './component/Input';
import Image from './component/Image';

import { LogDiffProps } from './interface'
import DiffContext from './Context'

const { Provider } = DiffContext

const LogDiff = (props: LogDiffProps) => {
  const { data, children } = props
  return (
    <Provider
      value={data}
    >{children}</Provider>
  );
}

LogDiff.Input = Input;
LogDiff.Image = Image;
LogDiff.Radio = Radio;

export { Radio, Input, Image };

export default LogDiff;
