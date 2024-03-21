export const inputLimitation = (e: React.FormEvent<HTMLInputElement>) => {
  switch (e.currentTarget.name) {
    case 'Пароль':
    case 'Подтверждение':
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
