import React from "react";
import { Text, View } from "react-native";
import { headerStyles } from "../styles/appStyles";

interface Props {
  total: number;
}

export const Header = ({ total }: Props) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>Calculadora IMC</Text>

      <Text style={headerStyles.subtitle}>
        {total === 0 ? "Sin registros aún" : `${total} registros guardados`}
      </Text>
    </View>
  );
};
