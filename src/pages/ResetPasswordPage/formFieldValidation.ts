export const formFieldValidation = (
  e: React.FormEvent<HTMLInputElement>,
  currentPaswordValue: React.MutableRefObject<string>,
) => {
  const regxpMaill = /@[reliab.tech]/g;

  switch (e.currentTarget.name) {
    case 'E-mail':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (!regxpMaill.test(e.currentTarget.value))
        return {
          error: true,
          text: 'Используйте @reliab.tech',
        };

      break;
    case 'Пароль':
      currentPaswordValue.current = e.currentTarget.value;
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (8 >= e.currentTarget.value.length)
        return {
          error: true,
          text: 'Слишком короткий пароль',
        };

      break;
    case 'Подтверждение':
      if (!e.currentTarget.value)
        return { error: true, text: 'Поле должно быть заполнено' };
      if (currentPaswordValue.current !== e.currentTarget.value)
        return { error: true, text: 'Пароли не совпадают' };
      break;
  }
};
