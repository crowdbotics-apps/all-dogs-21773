import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
CalendarView152387Saga,
EmailAuth152385Saga,
    
  ]);
}