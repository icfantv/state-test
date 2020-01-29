import React, { Dispatch } from 'react';
import produce from 'immer';

export interface AppState {
  functionalArea: {
    moreNesting: {
      provingPoint: {
        value: number;
      };
    };
  };
  anotherFunctionalArea: {
    nestedPiece: {
      drillingDown: {
        crazy: number;
      };
    };
  };
}

const INITIAL_STATE: AppState = {
  functionalArea: {
    moreNesting: {
      provingPoint: {
        value: 1
      }
    }
  },
  anotherFunctionalArea: {
    nestedPiece: {
      drillingDown: {
        crazy: 2
      }
    }
  }
};

type Action = { type: 'incrementValue' } | { type: 'incrementCrazy' };

const AppStateContext = React.createContext<AppState | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch<Action> | undefined>(undefined);

function appReducer(state: AppState, action: Action) {
  return produce(state, (draftState: AppState) => {
    switch (action.type) {
      case 'incrementValue': {
        draftState.functionalArea.moreNesting.provingPoint.value++;
        break;
      }
      case 'incrementCrazy': {
        draftState.anotherFunctionalArea.nestedPiece.drillingDown.crazy++;
        break;
      }
    }
  });
}

export function AppContextProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(appReducer, INITIAL_STATE);
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }

  return context;
}

export function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
}
