const initialState = {
  page: "Home",
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    default:
      return state;
  }
}
