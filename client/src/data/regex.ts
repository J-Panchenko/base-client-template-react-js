export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_\-\+=±{}\[\]‘“'";:?.\|,\\])[A-Za-z\d`~!@#$%^&*()_\-\+=±{}\[\]‘“'";:?.\|,\\]{8,}/i,
  otpCode: /^[0-9]{6}$/i,
};