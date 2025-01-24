import { create } from 'zustand';

interface Input {
  input: string;
  setInput: (text: string) => void;
}

const InputStore = create<Input>((set) => ({
  input: '',
  setInput: (text) => set({ input: text }),
}));

export default InputStore;
