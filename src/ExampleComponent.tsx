interface ExampleComponentProps {
  className: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
}

// Пояснение будет построчно
// На 1-ой строке созда interface, также есть еще type, это ключевые слова с помощью которых мы описываем переменные на TS
// Прочитать, чем interface отличается от type?
// 2 строка задает обязательную пропсу className с типом string, есть также еще несколько базовых типов, которые вам нужно знать
// Базовые типы - типы, которые зашиты в TS и их нельзя изменить
// Это типы JS, unknow, any, never, void
// На 3 строке я описал функцию, которая принимает один аргумент - объект события,
// какой тип объекта события выплевывает само событие, можно узнать задав обработчик события, прописать параметр объект события и навести на него см input
// void - указывает на то, что функция ничего не возвращает, если ваша функция что-то возращает, пишите тип возвр знаечния
// Знак вопроса после имени пропсы, говорит, что пропса мб не обязательной, а это значит она будет undefined, можете навести на это свойство и убедиться
// 5-6 строки попробуйте разобрать сами, что и как тут описано

// 27 строка props.onBlur && props.onBlur(e), так как onBlur мб undefined, то без проверки на его существование, мы при его запуске можем получить ошибку, так как функции в этой пропсе может и не быть
export const ExampleComponent = (props: ExampleComponentProps) => {
  return (
    <input
      onInput={(e) => props.onInput(e)}
      onChange={(e) => props.onChange(e)}
      onBlur={(e) => props.onBlur && props.onBlur(e)}
    />
  );
};

// Все файлы jsx -> tsx именуем так
// Все файлы js -> ts

// Со всем остальным работаем также, как и без TS
