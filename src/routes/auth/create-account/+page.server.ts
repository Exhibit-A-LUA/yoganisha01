import { redirect } from "@sveltejs/kit";
import { z } from "zod";

const GENDER = ["male", "female", "other"];

const studentSchema = z.object({
  email : z.string().email(),
  password : z.string().min(8),
  name : z.string().min(4),
  phone : z.string().min(8),
  address1 : z.string().min(20),
  address2 : z.string().nullable(),
  city : z.string().min(8),
  country : z.string().min(3),
  sex : z.string().refine((str) => {
    return GENDER.includes(str)
  })
})

export const actions = {
  default: async ( {locals, request }) => {
    if (locals.pocketBase.authStore.isValid) {
      throw redirect(303, "/");
    }

    let formData = await request.formData();

    let formDataObject = Object.fromEntries(formData)

    try {

      // console.log(formDataObject);
      

      let validatedFormData = studentSchema.parse(formDataObject)

      const studentWithNameExists = await locals.pocketBase
        .collection("students")
        .getFirstListItem(`name="${validatedFormData.name}"`)
        .catch(() => undefined);

      if (studentWithNameExists) {
        throw new Error("Name is already taken");
      }

      await locals.pocketBaseAdmin.collection("students").create({
        ...validatedFormData,
        passwordConfirm: validatedFormData.password,
        emailVisibility: false,
      });

      await locals.pocketBase
        .collection("students")
        .authWithPassword(validatedFormData.email, validatedFormData.password);


    } catch (error) {
      if (error instanceof Error) {
        return {
          
          message: error.message
        }
      }
      return {
        
        message: "Unknown error occured while trying to create account"
      }
    }
    throw redirect(303, "/");
  }
}