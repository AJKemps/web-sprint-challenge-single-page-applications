import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long.")
    .required("Name must be at least 2 characters long."),
  size: Yup.string().oneOf(
    ["Small", "Medium", "Large", "Extra Large"],
    "Please select a size"
  ),
});

export default formSchema;
