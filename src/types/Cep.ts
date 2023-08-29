export interface ICep {
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  logradouro: string;
}
export interface IResponseCep {
  data: ICep
}