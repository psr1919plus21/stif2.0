export default storeFieldToSave => store => next => action => {
    const prevState = store.getState();
    const result = next(action);
    const nextState = store.getState();

    console.log('nextState ', nextState);
    if (JSON.stringify(prevState[storeFieldToSave]) !== JSON.stringify(nextState[storeFieldToSave])) {
        window.localStorage.setItem(`reduxLocalStorage:${storeFieldToSave}`,
            JSON.stringify(nextState[storeFieldToSave]));
    }

    return result;
};
