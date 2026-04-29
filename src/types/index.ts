// Union type (valores para el diagnostico)
export type Diagnostico =
  | "Bajo peso"
  | "Peso normal"
  | "Sobrepeso"
  | "Obesidad";

//Interface para el registro
export interface RegistroIMC {
  id: string;
  nombre: string;
  peso: number;
  altura: number;
  imc: number;
  diagnostico: Diagnostico;
}

//Datos para el formulario. En peso y altura se pusieron strings
//Porque los TextInput de React Native trabajan con texto. Luego los converti con Number()
export interface FormularioIMC {
  nombre: string;
  peso: string;
  altura: string;
}

//Colores por cada tipo de diagnostico
export const DIAGNOSTICOS = [
  { valor: "Bajo peso", color: "#3B82F6" },
  { valor: "Peso normal", color: "#10B981" },
  { valor: "Sobrepeso", color: "#F59E0B" },
  { valor: "Obesidad", color: "#EF4444" },
];
