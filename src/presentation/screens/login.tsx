import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { inputStyle, textStyle } from "../../constants/styles";
import { pageStyle } from "../../constants/styles/container-style";
import { useAppDispatch } from "../../domain/hooks";
import { selectAuthenticationState } from "../../domain/slice/authentication/authenticationSlice";
import { login } from "../../domain/slice/authentication/authenticationThunk";
import { AppStatus } from "../../utils/appStatus";
import { ButtonPrimary, Input, Loading } from "../components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type LoginScreenParams = { home: { id: number } | undefined };
type FormValues = {
	username: string;
	password: string;
};
type Props = NativeStackScreenProps<LoginScreenParams>;
export default function Login({ navigation }: Props) {
	const { error, status } = useSelector(selectAuthenticationState);
	const dispatch = useAppDispatch();
	const {
		reset,
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm<FormValues>({
		defaultValues: {
			username: "",
			password: "",
		},
	});
	useEffect(() => {
		if (status === AppStatus.Succeded) {
			navigation.navigate("home");
			reset();
		}
	}, [status]);
	const handleButtonPress: SubmitHandler<FormValues> = (data: FormValues) => {
		if (isValid) {
			dispatch(login({ username: data.username, password: data.password }));
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
							display: "flex",
							justifyContent: "center",
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<Text
							style={[
								textStyle.textMdError,
								{
									textAlign: "center",
								},
							]}
						>
							{error!.message}
						</Text>
					</View>
				)}
				<Input
					rules={{ required: "Le nom d'utilisateur est requis" }}
					control={control}
					name="username"
					label="Nom d'utilisateur"
				></Input>
				<Input
					rules={{ required: "Le mot de passe est requis" }}
					control={control}
					name="password"
					secure
					label="Mot de passe"
				></Input>
				<View
					style={[
						inputStyle.inputGroup,
						{ display: "flex", justifyContent: "space-around" },
					]}
				>
					<ButtonPrimary
						title="Se connecter"
						handlePress={handleSubmit(handleButtonPress)}
						disabled={status === AppStatus.Loading}
					/>
				</View>
				<StatusBar style="auto" />
			</View>
		</>
	);
}
