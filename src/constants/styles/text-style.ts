import { StyleSheet } from "react-native";
import { AppColors } from "../colors";

export const textStyle = StyleSheet.create({
	textSm: {
		fontSize: 11,
		fontWeight: "400",
	},
	textMd: {
		fontSize: 14,
		fontWeight: "500",
	},
	textMdError: {
		fontSize: 14,
		fontWeight: "500",
		color: AppColors.errorColors,
	},
	textSmError: {
		fontSize: 11,
		fontWeight: "400",
		color: AppColors.errorColors,
	},
});
