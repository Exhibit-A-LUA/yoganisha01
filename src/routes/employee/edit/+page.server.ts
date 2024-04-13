// +page.server.ts - In employee/edit

import { redirect } from "@sveltejs/kit";
import { z } from "zod";
import type { PageServerLoad } from "./$types.js";

const GENDER = ["male", "female", "other"];
const ROLES = ["owner", "trainer", "admin"];

const employeeSchema = z.object({
  email : z.string().email(),
  name : z.string().min(4),
  photo : z.string().min(8),
  phone : z.string().min(8),
  address1 : z.string().min(20),
  address2 : z.string().nullable(),
  city : z.string().min(8),
  country : z.string().min(3),
  // birthDate : z.date(),
  sex : z.string().refine((str) => {
    return GENDER.includes(str)
  }),
  roles: z.array(z.string().refine((str) => {
      return ROLES.includes(str)
    }))
  // roles : z.string().refine((str) => {
  //   return ROLES.includes(str)
  // })
})

export const load = (async ( { locals}) => {
  if (!locals.pocketBase.authStore.isValid) {
    throw redirect(303, "/");
  }

  if (locals.pocketBase.authStore.model!.collectionName !==  'employees') {
    throw redirect(303, "/");
  }

  return {}
}) satisfies PageServerLoad;


export const actions = {
  default: async ( {locals, request }) => {
    if (!locals.pocketBase.authStore.isValid) {
      throw redirect(303, "/");
    }

    if (locals.pocketBase.authStore.model!.collectionName !==  'employees') {
      throw redirect(303, "/");
    }

    let formData = await request.formData();

    let formDataObject = Object.fromEntries(formData)

    console.log('form data object',formDataObject);

    try {


      formDataObject.roles = JSON.parse(z.string().parse(formDataObject.roles))

      let validatedFormData = employeeSchema.parse(formDataObject)

      await locals.pocketBase.collection("employees").update(locals.pocketBase.authStore.model?.id,validatedFormData);


    } catch (error) {
      if (error instanceof Error) {
        return {
          
          message: error.message
        }
      }
      return {
        
        message: "Unknown error occured while trying to edit student"
      }
    }
    // throw redirect(303, "/");
  }
}