import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootSaga from "./sagas";

const create = () => {
    let win: any = window as any;

    const devTools = win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__();
    const sagaMidleware = createSagaMiddleware();
    const middleware = applyMiddleware(sagaMidleware, logger)(createStore)(() => { }, devTools)

    sagaMidleware.run(rootSaga)

    return middleware
}

const store = create();

export default store