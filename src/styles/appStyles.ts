import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#6C63FF",
  background: "#F4F6FA",
  white: "#FFFFFF",
  darkText: "#1A1A2E",
  grayText: "#888888",
  border: "#E0E0E0",
  inputBg: "#FAFAFA",
  danger: "#EF4444",
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.darkText,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.grayText,
    marginTop: 4,
  },
});

export const formStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.grayText,
    marginBottom: 14,
    textTransform: "uppercase",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.darkText,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: COLORS.inputBg,
    marginBottom: 14,
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  fieldHalf: {
    flex: 1,
  },

  sliderLabel: {
    fontSize: 12,
    color: COLORS.grayText,
    marginBottom: 4,
  },

  slider: {
    width: "100%",
    height: 36,
  },
});

export const resultStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.darkText,
  },
  imc: {
    fontSize: 42,
    fontWeight: "800",
    marginVertical: 6,
  },
  diagnosis: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 14,
  },
  outlineButton: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  outlineButtonText: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export const statsStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.grayText,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  box: {
    flex: 1,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  value: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.darkText,
  },
  label: {
    fontSize: 11,
    color: COLORS.grayText,
    marginTop: 4,
  },
});

export const listStyles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.grayText,
    textTransform: "uppercase",
  },
  clearButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  clearButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.darkText,
  },
  emptyText: {
    textAlign: "center",
    color: COLORS.grayText,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    gap: 10,
  },
  colorBar: {
    width: 5,
    height: 46,
    borderRadius: 4,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.darkText,
  },
  diagnosis: {
    fontSize: 12,
    color: COLORS.grayText,
    marginTop: 2,
  },
  imc: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.darkText,
  },
  deleteText: {
    fontSize: 16,
    color: COLORS.danger,
    paddingLeft: 4,
  },
});
