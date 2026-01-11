import { ComponentPropsWithoutRef, ElementType, forwardRef, JSX, ReactNode } from 'react';
import clsx from 'clsx';
import s from './polymorphicButton.module.scss';

type Variant = 'primary' | 'secondary' | 'outline' | 'text';
type Size = 'sm' | 'md' | 'lg';

type PolymorphicRef<E extends ElementType> = ComponentPropsWithoutRef<E>['ref'];

type PolymorphicProps<E extends ElementType> = {
  as?: E;
  variant?: Variant;
  size?: Size;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  isActive?: boolean;
} & Omit<ComponentPropsWithoutRef<E>, 'children' | 'className' | 'disabled'>;

const PolymorphicButtonComponent = <E extends ElementType = 'button'>(
  props: PolymorphicProps<E>,
  ref: PolymorphicRef<E>,
) => {
  const { as, variant = 'primary', size = 'sm', className, disabled, children, fullWidth, isActive, ...rest } = props;

  const Component = as || 'button';

  const classes = clsx(
    s.btn,
    s[variant],
    s[size],
    {
      [s.fullWidth]: fullWidth,
      [s.disabled]: disabled,
      [s.active]: isActive,
    },
    className,
  );

  return (
    <Component
      ref={ref}
      className={classes}
      {...(Component === 'button' ? { disabled } : { 'aria-disabled': disabled })}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const PolymorphicButton = forwardRef(PolymorphicButtonComponent) as <E extends ElementType = 'button'>(
  props: PolymorphicProps<E> & { ref?: PolymorphicRef<E> },
) => JSX.Element;
