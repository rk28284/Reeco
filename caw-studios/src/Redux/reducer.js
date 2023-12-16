import {
  ADD_PRODUCT,
  CROSS_MISSING,
  CROSS_MISSING_URGENT,
  PRODUCT_DATA,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  RIGHT_APPROVED,

} from "./actionType";

const initialState = {
  isLoading: false,
  product: [],
  error: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCT_DATA: {
      return {
        ...state,
        isLoading: false,
        product: payload,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    case RIGHT_APPROVED: {
      const { productId } = payload;
      const updatedProducts = state.product.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            status: "Approved",
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }
    case CROSS_MISSING: {
      const productId = payload;

      const updatedProducts = state.product.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            status: "Missing",
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }
    case CROSS_MISSING_URGENT: {
      const { productId } = payload;
      const updatedProducts = state.product.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            status: "Missing-urgent",
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.product, payload],
      };
    default: {
      return state;
    }
  }
};


