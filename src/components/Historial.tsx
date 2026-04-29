import React from "react";
import { DIAGNOSTICOS, RegistroIMC } from "../types";
import { Text, TouchableOpacity, View } from "react-native";
import { listStyles } from "../styles/appStyles";

interface Props {
  registros: RegistroIMC[];
  onEliminar: (id: string) => void;
  onLimpiar: () => void;
}

export const Historial = ({ registros, onEliminar, onLimpiar }: Props) => {
  return (
    <View style={listStyles.container}>
      <View style={listStyles.headerRow}>
        <Text style={listStyles.sectionTitle}>Historial</Text>

        {registros.length > 0 && (
          <TouchableOpacity style={listStyles.clearButton} onPress={onLimpiar}>
            <Text style={listStyles.clearButtonText}>Limpiar todo</Text>
          </TouchableOpacity>
        )}
      </View>

      {registros.length === 0 ? (
        <Text style={listStyles.emptyText}>Aún no hay registros</Text>
      ) : (
        registros.map((registro) => {
          const infoDiagnostico = DIAGNOSTICOS.find(
            (item) => item.valor === registro.diagnostico,
          )!;

          return (
            <View key={registro.id} style={listStyles.item}>
              <View
                style={[
                  listStyles.colorBar,
                  { backgroundColor: infoDiagnostico.color },
                ]}
              />

              <View style={listStyles.info}>
                <Text style={listStyles.name}>{registro.nombre}</Text>
                <Text style={listStyles.diagnosis}>{registro.diagnostico}</Text>
              </View>

              <Text style={listStyles.imc}>{registro.imc.toFixed(2)}</Text>

              <TouchableOpacity onPress={() => onEliminar(registro.id)}>
                <Text style={listStyles.deleteText}>✕</Text>
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </View>
  );
};
