// State Types

export interface CepState {
  postCode: string;
  rua: string;
}

// Action Types

export const Types = {
  CHANGE_POST_CODE: 'cep/CHANGE_POST_CODE',
  CHANGE_RUA: 'cep/CHANGE_RUA',
};

// Reducer

const initialState: CepState = {
  postCode: '125',
  rua: '124',
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.CHANGE_POST_CODE:
      return { ...state, postCode: action.payload };
    case Types.CHANGE_RUA:
      return { ...state, rua: action.payload };
    default:
      return state;
  }
}

// Action Creators

export function changePostCode(postCode: string) {
  return {
    type: Types.CHANGE_POST_CODE,
    payload: {
      postCode
    },
  }
}

export function changeRua(rua: string) {
  return {
    type: Types.CHANGE_RUA,
    payload: rua
  }
}