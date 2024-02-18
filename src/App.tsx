import React from 'react';
import { IconHint } from './icons';
import { IconPassword } from './icons';
import {
  BaseInput,
  BaseInputProps,
} from './components/BaseComponents/BaseInput/BaseInput';

function App() {
  const handlerInput: BaseInputProps['onInput'] = (e) => {
    e?.currentTarget;
    console.log('123');
  };
  return (
    <>
      <BaseInput
        className="style"
        isError={true}
        helperText="пошел на хуй"
        onInput={handlerInput}
        value=""
        plaseholder="123456"
        label="asdasd"
        name="fsdfsdf"
        InnerComponent={<IconHint />}
        OuterComponent={<IconPassword />}
      />
      <BaseInput
        onInput={handlerInput}
        value=""
        plaseholder="123456"
        label="fsdfsdf"
      />
    </>
  );
}

export default App;

// name?: string;
// label?: string;
// plaseholder?: string;
// type?: string;
// InnerComponent?: React.ReactNode;
// OuterComponent?: React.ReactNode;
// onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
// onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
// className?: string;
// helperText?: string;
