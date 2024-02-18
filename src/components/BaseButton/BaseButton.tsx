import './style.css';
import cn from 'classnames';

export const BaseButton = (props: any) => {
  return (
    <button
      type={props.type || 'button'}
      onClick={(e) => props.onClick && props.onClick(e)} // Обрабатываем событие нажатия
      className={cn(
        'BaseButton',
        props.typeStyle === 'dark' ? 'BaseButton--dark' : 'BaseButton--default', // Получаем стиль кнопки
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

// typeStyle
// type
// onClick
// children
