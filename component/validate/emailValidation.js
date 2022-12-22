

export const emailValidation = (email) => {
    const data = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    return data;
}