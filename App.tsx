import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Diagnostico, DIAGNOSTICOS, RegistroIMC } from "./src/types";
import { globalStyles } from "./src/styles/appStyles";
import { Header } from "./src/components/Header";
import { Formularios } from "./src/components/Formularios";
import { ResultadoIMC } from "./src/components/ResultadoIMC";
import { Estadisticas } from "./src/components/Estadisticas";
import { Historial } from "./src/components/Historial";

export default function App() {
  //useState es un hook que crea una memoria. Será un arreglo de objetos como RegistroIMC
  const [registros, setRegistros] = useState<RegistroIMC[]>([]);
  const [resultado, setResultado] = useState<RegistroIMC | null>(null);
  const [calculado, setCalculado] = useState<boolean>(false);
  const [ultimoId, setUltimoId] = useState<string>("");

  //Formula para calcular el IMC
  const calcularIMC = (peso: number, altura: number): number => {
    return peso / (altura * altura);
  };

  //Diagnostico segun el IMC
  const obtenerDiagnostico = (imc: number): Diagnostico => {
    if (imc < 18.5) return "Bajo peso";
    if (imc <= 24.9) return "Peso normal";
    if (imc <= 29.9) return "Sobrepeso";
    return "Obesidad";
  };

  //Para mostrar el color del diagnostico
  const obtenerColorDiagnostico = (diagnostico: Diagnostico): string => {
    const info = DIAGNOSTICOS.find((item) => item.valor === diagnostico);
    //si existe un valor en info devuelve el color de ese info, si no hay se pone en negro
    return info ? info.color : "#000000";
  };

  // Función principal que calcula el IMC y guarda el resultado actual
  const manejarCalculo = (nombre: string, peso: number, altura: number) => {
    // Calcula el IMC usando peso y altura
    const imc = calcularIMC(peso, altura);

    // Obtiene el diagnóstico (bajo peso, normal, etc.)
    const diagnostico = obtenerDiagnostico(imc);

    // Genera un ID único usando la fecha actual con Date.
    const id = Date.now().toString();

    // Crea un objeto con todos los datos del resultado
    const nuevoResultado: RegistroIMC = {
      id,
      nombre,
      peso,
      altura,
      imc,
      diagnostico,
    };

    // Guarda el resultado actual
    setResultado(nuevoResultado);

    // Guarda el ID del último cálculo
    setUltimoId(id);

    // Marca que ya se hizo un cálculo
    setCalculado(true);
  };

  // Función para agregar el resultado actual al historial
  const agregarHistorial = () => {
    // Verifica si ese resultado ya existe en el historial
    // Asi no guarda el mismo resultado
    const existe = registros.some((registro) => registro.id === ultimoId);

    // Si no se ha calculado nada o no hay resultado, muestra error
    if (!calculado || resultado === null) {
      Alert.alert("Error", "Primero debes calcular el IMC");
      return;
    }

    // Si ya existe ese registro, evita duplicarlo
    if (existe) {
      Alert.alert("Aviso", "Este resultado ya fue guardado");
      return;
    }

    // Agrega el resultado al inicio del historial
    setRegistros([resultado, ...registros]);
  };

  // Función para eliminar un registro específico por su ID
  const eliminarRegistro = (id: string) => {
    // Filtra la lista y se queda con los que NO tengan ese id
    setRegistros(registros.filter((registro) => registro.id !== id));
  };

  // Función para borrar todo el historial
  const limpiarHistorial = () => {
    // Deja la lista de registros vacía
    setRegistros([]);
  };

  // Variable que guarda cuántos registros hay en total
  const total = registros.length;

  // Calcula la suma de todos los IMC guardados
  const sumaIMC = registros.reduce(
    (acumulador, registro) => acumulador + registro.imc,
    0,
  );

  // Calcula el promedio de IMC (evita dividir por 0)
  const promedio = total === 0 ? 0 : sumaIMC / total;

  // Obtiene el valor máximo de IMC del historial
  const maximo =
    total === 0
      ? 0
      : registros.reduce(
          (mayor, registro) => (registro.imc > mayor ? registro.imc : mayor),
          registros[0].imc,
        );

  // Define el color según el diagnóstico del resultado actual
  const colorDiagnostico = resultado
    ? obtenerColorDiagnostico(resultado.diagnostico)
    : "#000000";

  return (
    <ScrollView style={globalStyles.screen} keyboardShouldPersistTaps="handled">
      <Header total={total} />

      <Formularios onCalcular={manejarCalculo} />
      <ResultadoIMC
        resultado={resultado}
        colorDiagnostico={colorDiagnostico}
        onAgregarHistorial={agregarHistorial}
      />

      <Estadisticas total={total} promedio={promedio} maximo={maximo} />

      <Historial
        registros={registros}
        onEliminar={eliminarRegistro}
        onLimpiar={limpiarHistorial}
      />
    </ScrollView>
  );
}
