import { redirect } from "@sveltejs/kit";
import { z } from "zod";

const studentSchema = z.object({
  email : z.string().email(),
  password : z.string().min(8)
})

export const actions = {
  default: async ({ locals, request}) => {
    // if already logged in redirect to /
    if (locals.pocketBase.authStore.isValid) {
      throw redirect(303, "/");
    }

    let formData = await request.formData();
    let formDataObject = Object.fromEntries(formData)
    let validatedFormData = studentSchema.parse(formDataObject)

    try {

      await locals.pocketBase
        .collection("students")
        .authWithPassword(validatedFormData.email, validatedFormData.password);

    } catch (error) {
      if (error instanceof Error) {
        return {
          email: typeof validatedFormData.email !== "string" ? "" : validatedFormData.email,
          password: typeof validatedFormData.password !== "string" ? "" : validatedFormData.password,
          message: error.message
        }
      }
      return {
        email: typeof validatedFormData.email !== "string" ? "" : validatedFormData.email,
        password: typeof validatedFormData.password !== "string" ? "" : validatedFormData.password,
        message: "Unknown error occured while trying to log in"
      }

    }

    throw redirect(303, "/");
  }
}