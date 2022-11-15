import { StyleSheet } from "react-native";
import { AppColors } from "../colors";
export const inputStyle = StyleSheet.create({
	input: {
		borderRadius: 10,
		borderWidth: 1,
		height: 50,
		paddingLeft: 10,
		paddingVertical: 10,
	},
	inputError: {
		borderRadius: 10,
		borderWidth: 2,
		borderColor: AppColors.errorColors,
		height: 50,
		paddingLeft: 10,
		paddingVertical: 10,
	},
	inputFocused: {
		borderRadius: 10,
		borderWidth: 2,
		borderColor: AppColors.inputFocus,
		height: 50,
		paddingLeft: 10,
		paddingVertical: 10,
	},
	inputGroup: {
		marginVertical: 10,
		padding: 5,
	},
});
