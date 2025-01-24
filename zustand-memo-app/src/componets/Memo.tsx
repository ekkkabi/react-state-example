import { useState } from 'react';
import { MemoItem } from '../store/MemoStore';
import CancelButton from './CancelButton';

const Memo = ({ memo }: { memo: MemoItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          maxWidth: '80%',
          color: 'white',
          backgroundColor: '#168AFE',
          borderRadius: '15px',
          padding: '8px',
        }}
      >
        {memo.text}
      </div>
      {isHovered ? <CancelButton id={memo.id} /> : <></>}
    </div>
  );
};
export default Memo;
