class AppException extends Error {
	public exceptionType: ExceptionType;
	constructor(message: string, type: ExceptionType) {
		super(message);
		this.exceptionType = type;
	}

	public toError(): AppError {
		return {
			message: this.message,
			type: this.exceptionType,
		};
	}
}

enum ExceptionType {
	Server = "server",
	Authorization = "authorization",
	Network = "network",
	Validation = "validation",
}

interface AppError {
	message: string;
	type: ExceptionType;
}

export { AppException, ExceptionType, AppError };
