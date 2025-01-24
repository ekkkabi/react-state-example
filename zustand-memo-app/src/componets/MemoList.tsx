import MemoStore from '../store/MemoStore';
import Memo from './Memo';

const MemoList = () => {
  const memos = MemoStore((state) => state.memos);
  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        alignItems: 'flex-start',
        padding: '20px',
      }}
    >
      {memos.map((ele) => (
        <Memo key={ele.id} memo={ele} />
      ))}
    </li>
  );
};
export default MemoList;
