// State Types

import { ICep } from "@/types/Cep";

export interface CepState {
  cepResponse: ICep
}

// Action Types

export const Types = {
  CHANGE_CEP_RESPONSE: 'cep/CHANGE_CEP_RESPONSE'
};

// Reducer

const initialState: CepState = {
  cepResponse: {
    bairro: '',
    cep: '',
    cidade: '',
    logradouro: '',
    uf: ''
  }
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.CHANGE_CEP_RESPONSE:
      return { ...state, cepResponse: action.payload };
    default:
      return state;
  }
}

// Action Creators

export function changeCepResponse(cepResponse: ICep[]) {
  return {
    type: Types.CHANGE_CEP_RESPONSE,
    payload: cepResponse
  }
}