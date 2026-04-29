import React from "react";
import { Text, View } from "react-native";
import { statsStyles } from "../styles/appStyles";

interface Props {
  total: number;
  promedio: number;
  maximo: number;
}

export const Estadisticas = ({ total, promedio, maximo }: Props) => {
  return (
    <View style={statsStyles.card}>
      <Text style={statsStyles.sectionTitle}>Estadísticas</Text>

      <View style={statsStyles.row}>
        <View style={statsStyles.box}>
          <Text style={statsStyles.value}>{total}</Text>
          <Text style={statsStyles.label}>Registros</Text>
        </View>

        <View style={statsStyles.box}>
          <Text style={statsStyles.value}>
            {total === 0 ? "-" : promedio.toFixed(2)}
          </Text>
          <Text style={statsStyles.label}>Promedio</Text>
        </View>

        <View style={statsStyles.box}>
          <Text style={statsStyles.value}>
            {total === 0 ? "-" : maximo.toFixed(2)}
          </Text>
          <Text style={statsStyles.label}>Máximo</Text>
        </View>
      </View>
    </View>
  );
};
