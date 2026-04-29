import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RegistroIMC } from "../types/index";
import { resultStyles } from "../styles/appStyles";

interface Props {
  resultado: RegistroIMC | null;
  colorDiagnostico: string;
  onAgregarHistorial: () => void;
}

export const ResultadoIMC = ({
  resultado,
  colorDiagnostico,
  onAgregarHistorial,
}: Props) => {
  if (resultado === null) {
    return null;
  }

  return (
    <View style={resultStyles.card}>
      <Text style={resultStyles.name}>{resultado.nombre}</Text>

      <Text style={[resultStyles.imc, { color: colorDiagnostico }]}>
        {resultado.imc.toFixed(2)}
      </Text>

      <Text style={[resultStyles.diagnosis, { color: colorDiagnostico }]}>
        {resultado.diagnostico}
      </Text>

      <TouchableOpacity
        style={[resultStyles.outlineButton, { borderColor: colorDiagnostico }]}
        onPress={onAgregarHistorial}
      >
        <Text
          style={[resultStyles.outlineButtonText, { color: colorDiagnostico }]}
        >
          + Agregar al Historial
        </Text>
      </TouchableOpacity>
    </View>
  );
};
