import * as yup from "yup";

// signupSchema
export const signupSchema = yup.object({
  userName: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .required("Username is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Must contain uppercase, lowercase, number & special character"
    )
    .min(8, "Password must be at least 8 characters"),

  avatar: yup
    .mixed()
    .nullable()
    .test("fileType", "Only JPG/PNG allowed", (value) => {
      if (!value || value.length === 0) return true;
      return ["image/jpeg", "image/png"].includes(value[0]?.type);
    })
});

// loginSchema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
});