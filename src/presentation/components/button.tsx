import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { buttonStyle } from "../../constants/styles";

type ButtonProps = {
	handlePress: CallableFunction;
	title: string;
	disabled: boolean;
};

const ButtonPrimary = ({ handlePress, title, disabled }: ButtonProps) => {
	const handleButtonPress = (e: GestureResponderEvent): void => handlePress();
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={handleButtonPress}
			style={[buttonStyle.btnPrimary, buttonStyle.elevated]}
		>
			<Text style={{ color: "#FFFFFF", fontWeight: "600" }}>{title}</Text>
		</TouchableOpacity>
	);
};

export { ButtonPrimary };
