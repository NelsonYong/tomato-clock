import styles from './index.less';

const getTime = (current: string) => {
  // 第一个参数
  const minute = current.split(':')[0];
  return {
    minute: current.split(':')[0],
    second: current.split(':')[1],
  };
};

const TimeCard = ({
  focus = '05:00',
  rest = '05:00',
  long_rest = '10:00',
}: {
  focus: string;
  rest?: string;
  long_rest?: string;
}) => {
  const { minute: focusMinute, second: focusSecond } = getTime(focus);

  console.log(focusMinute);
  console.log(focusSecond);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Work</div>
      时间kapian
    </div>
  );
};

export default TimeCard;
