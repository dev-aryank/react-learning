import { create } from "zustand";
import counterSlice from "./slice/counterSlice";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";
import { devtools } from "zustand/middleware"

// const useGlobalStore = create(devtools((...a) => (
//     {
//         ...counterSlice(...a),
//         ...productSlice(...a),
//         ...cartSlice(...a)
//     }
// )));

const useGlobalStore = create((...a) => (
    {
        ...counterSlice(...a),
        ...productSlice(...a),
        ...cartSlice(...a)
    }
));

export default useGlobalStore;
