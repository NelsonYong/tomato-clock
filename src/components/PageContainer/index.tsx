import clx from 'classnames';
import styles from './index.less';
const PageContainer = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return <div className={clx(styles.container, className)}>{children}</div>;
};

export default PageContainer;
