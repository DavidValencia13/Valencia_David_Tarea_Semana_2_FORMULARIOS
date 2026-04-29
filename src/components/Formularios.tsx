import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, formStyles } from "../styles/appStyles";
import { FormularioIMC } from "../types";
import Slider from "@react-native-community/slider"; // Slider para ajustar valores con barra

interface Props {
  onCalcular: (nombre: string, peso: number, altura: number) => void;
}

export const Formularios = ({ onCalcular }: Props) => {
  const [form, setForm] = useState<FormularioIMC>({
    nombre: "",
    peso: "",
    altura: "",
  });

  // Actualiza cualquier campo del formulario
  const handleChange = (key: keyof FormularioIMC, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const calcular = () => {
    const nombre = form.nombre.trim();
    const peso = Number(form.peso);
    const altura = Number(form.altura);

    // Validación de campos vacíos
    if (nombre === "" || form.peso === "" || form.altura === "") {
      Alert.alert("Campos requeridos", "Completa nombre, peso y altura");
      return;
    }

    // Validación peso
    if (isNaN(peso) || peso <= 0 || peso >= 500) {
      Alert.alert("Peso inválido", "El peso debe ser mayor a 0 y menor a 500");
      return;
    }

    // Validación altura
    if (isNaN(altura) || altura <= 0 || altura >= 3) {
      Alert.alert(
        "Altura inválida",
        "La altura debe ser mayor a 0 y menor a 3"
      );
      return;
    }

    // Envía datos al App
    onCalcular(nombre, peso, altura);
  };

  return (
    <View style={formStyles.card}>
      <Text style={formStyles.sectionTitle}>Datos del paciente</Text>

      {/* INPUT NOMBRE */}
      <Text style={formStyles.label}>Nombre</Text>
      <TextInput
        style={formStyles.input}
        placeholderTextColor={COLORS.grayText}
        value={form.nombre}
        onChangeText={(value) => handleChange("nombre", value)}
      />

      {/* FILA PESO + ALTURA */}
      <View style={formStyles.row}>

        {/* BLOQUE PESO */}
        <View style={formStyles.fieldHalf}>
          <Text style={formStyles.label}>Peso (kg)</Text>

          <TextInput
            style={formStyles.input}
            placeholder="Ej: 70"
            placeholderTextColor={COLORS.grayText}
            keyboardType="numeric"
            value={form.peso}
            onChangeText={(value) => handleChange("peso", value)}
          />

          {/* Slider para peso */}
          <Text style={formStyles.sliderLabel}>Ajustar peso</Text>

          <Slider 
            style={formStyles.slider}
            minimumValue={1}
            maximumValue={499.5}
            step={0.5}
            value={Number(form.peso) || 65}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.border}
            thumbTintColor={COLORS.primary}
            onValueChange={(value) =>
              handleChange("peso", value.toFixed(1))
            }
          />
        </View>

        {/* BLOQUE ALTURA */}
        <View style={formStyles.fieldHalf}>
          <Text style={formStyles.label}>Altura (m)</Text>

          <TextInput
            style={formStyles.input}
            placeholder="Ej: 1.70"
            placeholderTextColor={COLORS.grayText}
            keyboardType="numeric"
            value={form.altura}
            onChangeText={(value) => handleChange("altura", value)}
          />

          {/* Slider para altura */}
          <Text style={formStyles.sliderLabel}>Ajustar altura</Text>

          <Slider
            style={formStyles.slider}
            minimumValue={0.5}
            maximumValue={2.99}
            step={0.01}
            value={Number(form.altura) || 1.68}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.border}
            thumbTintColor={COLORS.primary}
            onValueChange={(value) =>
              handleChange("altura", value.toFixed(2))
            }
          />
        </View>

      </View>

      {/* BOTÓN */}
      <TouchableOpacity style={formStyles.button} onPress={calcular}>
        <Text style={formStyles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
};