import { BurgerIcon, CloseIcon } from '../../../../../assets/icons/components';
import s from './mobileMenu.module.scss';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const BurgerButton = ({ isOpen, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label='Open menu'
      className={s.burger}
    >
      {isOpen ? <CloseIcon /> : <BurgerIcon />}
    </button>
  );
};
