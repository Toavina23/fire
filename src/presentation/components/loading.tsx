import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

type Props = {
	size: "small" | "large";
};

export default function Loading({ size }: Props) {
	return (
		<View
			style={[
				style.container,
			]}
		>
            <ActivityIndicator size={size}></ActivityIndicator>
        </View>
	);
}

const style = StyleSheet.create({
	container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
		position: "absolute",
        top: 0, 
        bottom: 0, 
        left: 0,
        right: 0,
		backgroundColor: "rgba(0,0,0,0.1)",
		opacity: 10,
	},
});
