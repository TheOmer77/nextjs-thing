import classNames from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

const H1 = ({
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => (
  <h1
    className={classNames(
      'mb-4 mt-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl lg:mb-8 lg:text-7xl',
      className
    )}
    {...props}
  />
);

export default H1;
