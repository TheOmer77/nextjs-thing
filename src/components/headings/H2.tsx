import classNames from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

const H1 = ({
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => (
  <h2
    className={classNames('my-4 mt-4 text-xl font-bold', className)}
    {...props}
  />
);

export default H1;
