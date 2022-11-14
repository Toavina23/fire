import React, { useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { View, TextInput, Text } from "react-native";
import { inputStyle, textStyle } from "../../constants/styles";

type InputProps = {
	rules: any;
	name: string;
	control: Control<any, any>;
	label: string;
	secure?: boolean;
};

export default function Input({ label, secure, control, name , rules}: InputProps) {
	const [focus, setFocus] = useState(false);
	const onFocus = () => {
		setFocus(true);
	};
	const defineInputStyle = (error: FieldError | undefined) => {
		if (error) {
			return inputStyle.inputError;
		}
		return focus ? inputStyle.inputFocused : inputStyle.input;
	};
	const onInputBlur = (onBlur: CallableFunction) => {
		onBlur();
		setFocus(false);
	};
	return (
		<View style={inputStyle.inputGroup}>
			<Controller
			rules={rules}
				name={name}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error },
				}) => {
					console.log(name, error)
					return (
						<>
							<Text style={error ? textStyle.textSmError : textStyle.textSm}>
								{label}
							</Text>
							<TextInput
								value={value}
								onBlur={() => onInputBlur(onBlur)}
								onFocus={() => onFocus()}
								onChangeText={onChange}
								secureTextEntry={secure ? true : false}
								style={defineInputStyle(error)}
							></TextInput>
							{error && (
								<Text style={textStyle.textSmError}>{error.message}</Text>
							)}
						</>
					);
				}}
				control={control}
			/>
		</View>
	);
}
