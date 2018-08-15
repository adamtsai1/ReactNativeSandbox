let _store;

function dispatch(action) {
    _store.dispatch(action);
}

function setStore(store) {
    _store = store;
}

export default {
    dispatch,
    setStore,
};
