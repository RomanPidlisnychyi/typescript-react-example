import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lastNmame: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => void;
  person?: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ text, handleChange }) => {
  // const [count, setCount] = useState<number | null>(5);
  const [count, setCount] = useState<TextNode>({ text: 'Hi' });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      {text}
      {count.text}
      <input ref={inputRef} onChange={handleChange} />
      <button onClick={() => setCount({ text: 'By!' })}>Click Me!</button>
    </div>
  );
};
