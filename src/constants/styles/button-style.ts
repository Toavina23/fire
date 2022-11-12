import { StyleSheet } from "react-native";
import { AppColors } from "../colors";

export const buttonStyle = StyleSheet.create({
    btnPrimary: {
        display: "flex",
        flexGrow: 1,
        backgroundColor: AppColors.primary,
        borderRadius: 20, 
        paddingVertical: 10, 
        alignItems: "center",
        color: "#FFFFFF"
    }, 
    elevated: {
        elevation: 20,
        shadowColor: AppColors.shadowColor,
    }
});