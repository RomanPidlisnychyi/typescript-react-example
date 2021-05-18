import React, { useState } from 'react';
//Array
// const last = (arr: number[]) => {}
export const last = <T,>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const l2 = last<string>(['a', 'b', 'c']);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, null);
const v2 = makeArr('h', 7);
const v3 = makeArr<string | null, number>('a', 4);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return { ...obj, fullName: obj.firstName + ' ' + obj.lastName };
};

const v4 = makeFullName({ firstName: 'Bob', lastName: 'Junior', age: 15 });
// const v5 = makeFullName({ another: 'Bob', lastName: 'Junior', age: 15 });

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullName: string | null }>({ fullName: '' });

  return <div>Hello {name}</div>;
};

interface FormsProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormsProps<T>) => {
  return children(values);
};

const App: React.FC = () => {
  return (
    <div>
      <Form<{ firstName: string | null }> values={{ firstName: 'bob' }}>
        {values => <div>{values.firstName}</div>}
      </Form>
    </div>
  );
};
