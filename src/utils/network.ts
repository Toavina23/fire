import * as Network from "expo-network";

interface Network {
	hasConnection(): Promise<boolean>;
}
export const networkUtil: Network = {
	async hasConnection(): Promise<boolean> {
		const networkState: Network.NetworkState =
			await Network.getNetworkStateAsync();
		return networkState.isInternetReachable!;
	},
};
