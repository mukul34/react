export const validate = (data) => {
    const { email, password } = data;

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) return {
        isValid: false,
        email: {
            errorMessage: "Invalid Email",
        },
        password: {
            errorMessage: ""
        }
    };
    if (!isPasswordValid) return {
        isValid: false,
        email: {
            errorMessage: "",
        },
        password: {
            errorMessage: "Invalid password"
        }
    };
    return {
        isValid: true,
        email: {
            errorMessage: "",
        },
        password: {
            errorMessage: ""
        }
    };
}