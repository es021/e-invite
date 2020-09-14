import popup from './modules/popup'

const debug = process.env.NODE_ENV !== 'production'


const store = {
  modules: {
    popup
  },
  strict: debug
};


export default store;
export function getStore(storeName, key) {
  var getter = store.modules[storeName]["getters"][key];
  //console.log("getter",getter);
  return getter(store.modules[storeName]["state"]);
}
