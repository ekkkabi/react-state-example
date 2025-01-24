import InputStore from '../store/InputStore';
import MemoStore from '../store/MemoStore';

const SendButton = () => {
  const { input, setInput } = InputStore((state) => state);
  const addMemo = MemoStore((state) => state.addMemo);

  const handleSubmit = () => {
    if (input.trim()) {
      addMemo(input);
      setInput('');
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{ height: '30px', width: '40px', backgroundColor: '#3194D6', borderRadius: '80px' }}
    >
      ✈️
    </button>
  );
};
export default SendButton;
