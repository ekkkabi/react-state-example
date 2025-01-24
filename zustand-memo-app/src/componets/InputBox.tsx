import InputStore from '../store/InputStore';

const InputBox = () => {
  const { input, setInput } = InputStore((state) => state);

  return (
    <input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{
        width: '85%',
        height: '30px',
        borderRadius: '50px',
        border: 'none',
        padding: '2px',
      }}
    />
  );
};
export default InputBox;
