import { create } from 'zustand';

export interface MemoItem {
  id: number;
  text: string;
}

interface Memo {
  memos: MemoItem[];
  addMemo: (text: string) => void;
  removeMemo: (id: number) => void;
}

const MemoStore = create<Memo>((set) => ({
  memos: [],
  addMemo: (text) =>
    set((state) => ({
      memos: [...state.memos, { id: Date.now(), text }],
    })),
  removeMemo: (id) =>
    set((state) => ({
      memos: state.memos.filter((item) => item.id !== id),
    })),
}));

export default MemoStore;
