import MemoStore from '../store/MemoStore';

const CancelButton = ({ id }: { id: number }) => {
  const removeMemo = MemoStore((state) => state.removeMemo);

  return (
    <button
      style={{
        height: '30px',
        width: '30px',
        backgroundColor: '#c6c6c6',
        color: '#ffffff',
        borderRadius: '80px',
      }}
      onClick={() => removeMemo(id)}
    >
      X
    </button>
  );
};
export default CancelButton;
