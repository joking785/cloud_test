export const chekBlure = (e: React.FormEvent<HTMLInputElement>) => {
  const regexpFstAndLastSyb = /^[А-Я]+[а-я\-*/'*]+[а-я]+$/g;
  const regxpMaill = /@[reliab.tech]/g;
  switch (e.currentTarget.name) {
    case 'Имя':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (!regexpFstAndLastSyb.test(e.currentTarget.value))
        return {
          error: true,
          text: 'Символ не может стоять в начале или конце слова',
        };
      break;

    case 'Фамилия':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (!regexpFstAndLastSyb.test(e.currentTarget.value))
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
      if (!regxpMaill.test(e.currentTarget.value))
        return {
          error: true,
          text: 'Используйте @reliab.tech',
        };

      break;
  }
};
