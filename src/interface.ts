import React from 'react';

export interface Content {
  [key: string]: {
    [key: string]: any
  };
}

interface Data {
  before: Content;
  after: Content;
  constants: Content;
}

export interface LogDiffProps {
  children: JSX.Element | React.ReactNode;
  data: Data;
}

export type NamePath = (string | number)[];

export interface ItemProps {
  className?: string;
  label: string;
  name: NamePath | (NamePath)[];
}

export interface LabelProps {
  label: string;
  isSame: boolean;
}

export interface ContentProps {
  beforeNode: React.ReactNode;
  afterNode: React.ReactNode;
  isSame: boolean;
}

export type StoreValue = any;

export interface Store {
  [name: string]: StoreValue;
}

export interface NestedArray<T> extends Array<T | NestedArray<T>> { }

export interface NameDataType {
  before: NestedArray<string>;
  after: NestedArray<string>;
  isSame: boolean;
}