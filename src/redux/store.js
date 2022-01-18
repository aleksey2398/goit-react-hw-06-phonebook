import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import phonebookReducer from "./phonebook/phonebook-reducer";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, phonebookReducer),
});
// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devtools: process.env.NODE_ENV !== "development",
});

export const persistor = persistStore(store);
