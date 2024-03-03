export const inputLimitation = (e: React.FormEvent<HTMLInputElement>) => {
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
      e.currentTarget.value = e.currentTarget.value
        .trim()
        .replace(/[^A-Za-z._\d-]+/g, '')
        .slice(0, 20);
      break;

    case 'E-mail':
      e.currentTarget.value = e.currentTarget.value
        .trim()
        .replace(/([А-Яа-яЁё&=+<>,'&-])|(\.{2})/g, '');
      break;

    default:
      break;
  }
};
