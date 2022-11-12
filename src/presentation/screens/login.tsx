import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { inputStyle, textStyle } from "../../constants/styles";
import { pageStyle } from "../../constants/styles/container-style";
import { useAppDispatch } from "../../domain/hooks";
import { selectAuthenticationState } from "../../domain/slice/authentication/authenticationSlice";
import { login } from "../../domain/slice/authentication/authenticationThunk";
import { AppStatus } from "../../utils/appStatus";
import { ButtonPrimary, Input, Loading } from "../components";
import { useForm } from "react-hook-form";


type LoginScreenParams = { home: { id: number } | undefined };
type Props = NativeStackScreenProps<LoginScreenParams>;
export default function Login({ navigation }: Props) {
	const { error, status } = useSelector(selectAuthenticationState);
	const dispatch = useAppDispatch();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [usernameError, setUsernameError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);
	const { control, handleSubmit, formState: {errors} } = useForm();
	const validate = (): boolean => {
		clearErrors();
		let isValid = true;
		if (username === "") {
			setUsernameError("Le nom d'utilisateur est requis");
			isValid = false;
		}
		if (password === "") {
			setPasswordError("Le mot de passe est requis");
			isValid = false;
		}
		return isValid;
	};
	useEffect(() => {
		if (status === AppStatus.Succeded) {
			navigation.navigate("home");
			reset();
		}
	}, [status]);
	const clearErrors = () => {
		setUsernameError(null);
		setPasswordError(null);
	};

	const reset = (): void => {
		setUsername("");
		setPassword("");
	};

	const handleUsernameChange = (newUsername: string) => {
		setUsername((_) => newUsername);
	};
	const handlePasswordChange = (newPassword: string) => {
		setPassword((_) => newPassword);
	};

	const handleButtonPress = () => {
		if (validate()) {
			dispatch(login({ username: username, password: password }));
		}
	};

	return (
		<>
			{status === AppStatus.Loading && <Loading size="large" />}
			<View style={[pageStyle.container, pageStyle.containerCenter]}>
				<View
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image
						source={require("../../../assets/appLogo.png")}
						style={{ width: 200, height: 200 }}
					></Image>
				</View>

				{status === AppStatus.Failed && (
					<View
						style={{
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<Text style={textStyle.textSmError}>{error!.message}</Text>
					</View>
				)}
				<Input
					error={usernameError}
					value={username}
					label="Nom d'utilisateur"
					changeNotifier={handleUsernameChange}
				></Input>
				<Input
					error={passwordError}
					secure
					value={password}
					label="Mot de passe"
					changeNotifier={handlePasswordChange}
				></Input>
				<View
					style={[
						inputStyle.inputGroup,
						{ display: "flex", justifyContent: "space-around" },
					]}
				>
					<ButtonPrimary
						title="Se connecter"
						handlePress={handleButtonPress}
						disabled={status === AppStatus.Loading}
					/>
				</View>
				<StatusBar style="auto" />
			</View>
		</>
	);
}
