import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth152582Saga from '../features/EmailAuth152582/redux/sagas';
import CalendarView152387Saga from '../features/CalendarView152387/redux/sagas';
import EmailAuth152385Saga from '../features/EmailAuth152385/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth152582Saga,
CalendarView152387Saga,
EmailAuth152385Saga,
    
  ]);
}