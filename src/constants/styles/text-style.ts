import { StyleSheet } from "react-native";
import { AppColors } from "../colors";

export const textStyle = StyleSheet.create({
    textSm: {
        fontSize: 11,
        fontWeight: '400'
    },
    textSmError: {
        fontSize: 11,
        fontWeight: '400',
        color: AppColors.errorColors
    }
});