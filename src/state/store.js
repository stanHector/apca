//* redux store configuration *//

import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'connected-react-router';
// import { createRootReducer } from './rootReducer';
import CountReducer from './reducers/CountReducer';



export const store = configureStore({
    reducer: {
        // router: routerReducer,
        // user: userReducer,
        // auth: authReducer,
        // post: postReducer,
        // comment: commentReducer,
        // like: likeReducer,
        // notification: notificationReducer,
        // message: messageReducer,
        // chat: chatReducer,
        count: CountReducer,
    }
});

