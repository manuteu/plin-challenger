// State Types

export interface ContractState {
  name: string;
}

// Action Types

export const Types = {
  CHANGE_NAME: 'cep/CHANGE_NAME',
};

// Reducer

const initialState: ContractState = {
  name: ''
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// Action Creators

export function changeName(name: string) {
  return {
    type: Types.CHANGE_NAME,
    payload: {
      name
    },
  }
}