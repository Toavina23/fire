import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { inputStyle, textStyle } from "../../constants/styles";

type InputProps = {
	changeNotifier: CallableFunction;
	value: string;
	label: string;
	secure?: boolean;
	error: string | null;
};

export default function Input({
	changeNotifier,
	value,
	label,
	secure,
	error
}: InputProps) {
	const handleChange = (newValue: string): void => {
		changeNotifier(newValue);
	};
	const [focus, setFocus] = useState(false);
	const onFocus = () => {
		setFocus(true);
	};
	const onBlur = () => {
		setFocus(false);
	};

	const defineInputStyle = () => {
		if(error != null){
			return inputStyle.inputError
		}
		else{
			return focus ? inputStyle.inputFocused : inputStyle.input
		}
	}
	return (
		<View style={inputStyle.inputGroup}>
			<Text style={error === null ? textStyle.textSm: textStyle.textSmError}>{label}</Text>
			<TextInput
				onBlur={() => onBlur()}
				onFocus={() => onFocus()}
				secureTextEntry={secure ? true : false}
				onChangeText={handleChange}
				style={defineInputStyle()}
				value={value}
			></TextInput>
			{error && <Text style={textStyle.textSmError}>{error}</Text>}
		</View>
	);
}
