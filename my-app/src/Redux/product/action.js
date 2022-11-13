import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const SET_ORDER = "SET_ORDER";
// export const DELETE_CART = "DELETE_CART";
export const FETCH_TO_CART = "FETCH_TO_CART";
// export const REMOVE_ITEME = "REMOVE_ITEME";
export const fetchDataAction = (data) => {
  return {
    type: FETCH_DATA,
    payload: data
  };
};

export const fetchData = (payload) => async (dispatch) => {
  //console.log(payload, "pay");
  return axios
    .get("https://rbigbasket.herokuapp.com/vegetables", {
      params: {
        ...payload
      }
    })
    .then((res) => {
      // console.log("..res..", res.data);
      dispatch(fetchDataAction(res.data));
    })
    .catch((e) => console.log("UU", e));
};

export const getSingleProductAction = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  // console.log(id)
  return axios
    .get(`https://rbigbasket.herokuapp.com/vegetables/${id}`)
    .then((res) => {
      // console.log("...single..res...",res.data);
      dispatch(getSingleProductAction(res.data));
    })
    .catch((e) => console.log("ERRooo", e));
};

export const addtocartaction = (data) => ({
  type: ADD_TO_CART,
  payload: data
});

export const addtoCart = (product) => (dispatch) => {
  axios
    .post("https://rbigbasket.herokuapp.com/vegetablecart", product)
    .then((res) => {
      console.log("add", res.data);
      dispatch(addtocartaction(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchcartaction = (data) => ({
  type: FETCH_TO_CART,
  payload: data
});

export const fetchtoCart = () => (dispatch) => {
  axios
    .get("https://rbigbasket.herokuapp.com/vegetablecart")
    .then((res) => {
      // console.log("get", res.data);
      dispatch(fetchcartaction(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const removeItemAction = (data) => {
  return {
    type: REMOVE_TO_CART,
    payload: data
  };
};

export const removeItem = (id) => (dispatch) => {
  axios
    .delete(`https://rbigbasket.herokuapp.com/vegetablecart/${id}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(removeItemAction(res.data));
    })
    .then((r) => {
      dispatch(fetchtoCart());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setorderaction = (data) => ({
  type: SET_ORDER,
  payload: data
});

export const addOrder = (product) => (dispatch) => {
  console.log("DAAA", product);
  axios
    .post("https://rbigbasket.herokuapp.com/rasor", product)
    .then((res) => {
      console.log("....add...", res);
      dispatch(setorderaction(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};
