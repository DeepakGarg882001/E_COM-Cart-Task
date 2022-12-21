import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import saga from "./saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore( {
    reducer:RootReducer,
    middleware:() => [sagaMiddleware]
});

sagaMiddleware.run(saga);

export default Store;

