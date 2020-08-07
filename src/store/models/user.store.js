import { thunk } from "easy-peasy";

const userStore = {
  triggerUserAction: thunk((state, _, { getStoreActions }) => {
    console.log("triggerUserAction() called");

    const { app } = getStoreActions();
    app.someThunk();
    app.someAction();
  }),
};

export { userStore };
