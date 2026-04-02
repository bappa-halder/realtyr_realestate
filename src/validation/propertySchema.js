import * as yup from "yup";

export const propertySchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(20, "Title must be at most 20 characters")
    .required("Title is required"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  location: yup
    .string()
    .trim()
    .required("Location is required"),

  bedroom: yup
    .number()
    .typeError("Bedroom must be a number")
    .integer("Bedroom must be an integer")
    .min(1, "Bedroom must be at least 1")
    .required("Bedroom is required"),

  bathroom: yup
    .number()
    .typeError("Bathroom must be a number")
    .integer("Bathroom must be an integer")
    .min(1, "Bathroom must be at least 1")
    .required("Bathroom is required"),

  area: yup
    .number()
    .typeError("Area must be a number")
    .positive("Area must be greater than 0")
    .required("Area is required"),

  purpose: yup
    .string()
    .oneOf(["rent", "sale"], "Purpose must be either rent or sale")
    .required("Purpose is required"),

  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "File size must be less than 2MB", (value) => {
      return value && value[0] && value[0].size <= 2000000;
    })
    .test("fileType", "Only JPG, PNG, WEBP allowed", (value) => {
      return (
        value &&
        value[0] &&
        ["image/jpeg", "image/png", "image/webp"].includes(value[0].type)
      );
    }),
});