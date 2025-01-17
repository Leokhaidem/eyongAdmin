// src/constants/routes.ts - Route definitions
export const ROUTES = {
    DASHBOARD: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    ORDERPAGE: '/dashboard/orders',
    SPECIFICORDER: '/dashboard/orders/:orderId',
    ALLCUSTOMERS: '/dashboard/customers',
    SPECIFICCUSTOMER: '/dashboard/customers/:customerId',
    ALLCATEGORIES: '/dashboard/categories/',
    SPECIFICCATEGORY: '/dashboard/categories/:categoryId',
    EDITCATEGORY: '/dashboard/categories/:categoryId/edit',
    
    COLLECTIONS: '/collections',
    COLLECTIONS_PRODUCTS: '/collections/:title',
    SEARCH: '/search',
    SEARCH_RESULTS: '/search/:searchTerm',
    ABOUT: '/about',
    CART: '/cart',

    PRODUCT: {
      LIST: '/dashboard/products',
      DETAIL: '/dashboard/products/:productId',

    },

    SORTED: '/sorted/:categoryId/:subcategoryId?',
    CATEGORY: '/category',
    CHECKOUT_FROM_CART: '/checkout',
    CHECKOUT_USING_BUY_NOW: '/checkout/:productId/:variantId/:quantity',
    ORDER_CONFIRMATION: '/orderconfirm',
    ORDER_DETAIL: '/order/:orderId',
    WISHLIST: '/wishlist',
    MY_ORDER: '/myorder',
    CHAT: '/chat',
    SELLER_FORM: '/sellerform',
    SELL_ON: '/sellOn',
    SELLER_DASHBOARD: '/sellerdashboard',
    SELLER_PRODUCT: '/sellerproduct',
    SELLER_ORDER: '/sellerorder',
    PRIVACY_POLICY: '/privacypolicy',
    TERMS_AND_CONDITIONS: '/tac',
    CANCELLATION_AND_REFUND: '/cancel',
    SHIPPING_AND_DELIVERY: '/shipping',
    CONTACT: '/contact',
  };
  