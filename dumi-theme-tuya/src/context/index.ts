import { createContext } from 'react';

export type GetKeys<T, Filter = any> = {
  [P in keyof T]: T[P] extends Filter ? P : never;
}[keyof T];

export type WriteAbleKeys = GetKeys<CodeCtxType, string | string[]>;

export type WriteAbleCtx<T extends WriteAbleKeys = WriteAbleKeys> = {
  [K in T]: CodeCtxType[K];
};

type CodeCtxType = {
  themes: string[];
  currentTheme: string;
  update: (arg: Partial<WriteAbleCtx>) => void;
};

export const CodeContext = createContext<CodeCtxType>({
  themes: [],
  currentTheme: null,
  update: ({}) => {},
});

export type IFProps = {
  theme: string;
  children: string;
};
