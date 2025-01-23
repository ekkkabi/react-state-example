import InputBox from './InputBox';
import SendButton from './SendButton';

const InputForm = () => {
  return (
    <div style={{ width: '500px', height: '50px', backgroundColor: '#efefef' }}>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
        <InputBox />
        <SendButton />
      </div>
    </div>
  );
};
export default InputForm;
