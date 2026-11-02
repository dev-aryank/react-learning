import { create } from "zustand";

const useCounterStore = create((set, get) => {
    return {
        count: 0,
        increment: () => {
            set((state) => ({ count: state.count + 1 }));
        },
        decrement: () => {
            set((state) => ({ count: state.count - 1 }));
        },
        incrementAsync: async (delta) => {
            const prevCount = get().count;
            await new Promise((resolve) => setTimeout(resolve, 3000));
            set({ count: prevCount + delta });
        },
    };
});

export default useCounterStore;
