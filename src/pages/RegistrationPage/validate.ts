export const validate = (e: React.FormEvent<HTMLInputElement>) => {
  switch (e.currentTarget.name) {
    case 'Имя':
      e.currentTarget.value = e.currentTarget.value
        .trim()
        .toLowerCase()
        .replace(/[^-А-Яа-яЁё']+/g, '')
        .replace(/(^)[А-Яа-яЁё ]/, function (x) {
          return x.toUpperCase();
        })
        .slice(0, 20);
      break;

    case 'Фамилия':
      console.log(13);

      e.currentTarget.value = e.currentTarget.value
        .trim()
        .toLowerCase()
        .replace(/[^-А-Яа-яЁё']+/g, '')
        .replace(/(^)[А-Яа-яЁё]/, function (x) {
          return x.toUpperCase();
        })
        .slice(0, 20);
      break;

    case 'Пароль':
      console.log(13);

      e.currentTarget.value = e.currentTarget.value
        .trim()
        .replace(/[^A-Za-z._\d-]+/g, '')
        .slice(0, 20);
      break;

    case 'E-mail':
      console.log(13);

      e.currentTarget.value = e.currentTarget.value
        .trim()
        .replace(/([А-Яа-яЁё&=+<>,'&-])|(\.{2})/g, '');
      break;

    default:
      break;
  }
  //setDataValue((e.target as HTMLInputElement).value.trim());
  // const nextVal = target.value;
  // setDataValue(nextVal);
  console.log(e.currentTarget.name);
  // setDataValue(e.currentTarget.value);
};
