export const chekBlure = (e: React.FormEvent<HTMLInputElement>) => {
  const regexp = /^[А-Я]+[а-я\-*/'*]+[а-я]+$/g;
  const mailregxp = /@[reliab.tech]/g;
  switch (e.currentTarget.name) {
    case 'Имя':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (!regexp.test(e.currentTarget.value))
        return {
          error: true,
          text: 'Символ не может стоять в начале или конце слова',
        };
      break;

    case 'Фамилия':
      console.log(3);

      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (!regexp.test(e.currentTarget.value))
        return {
          error: true,
          text: 'Символ не может стоять в начале или конце слова',
        };

      break;
    case 'Пароль':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (8 >= e.currentTarget.value.length)
        return {
          error: true,
          text: 'Слишком короткий пароль',
        };

      break;
    case 'E-mail':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (!mailregxp.test(e.currentTarget.value))
        return {
          error: true,
          text: 'Используйте @reliab.tech',
        };

      break;
  }
};
