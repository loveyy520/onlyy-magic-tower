import { createStore } from 'rax-app';
import warrior from "./models/warrior";
import floors from "./models/floors";

const store = createStore({ warrior, floors });

export default store;