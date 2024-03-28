import type { PageServerLoad } from "./$types";
import z from "zod"

export const load: PageServerLoad = async ({ locals }) => {
  // next line is a test to get one student record
  // const authData = await locals.pocketBase.collection('students').authWithPassword('test@email.com', '12345678')

//   const data = {
//     "email": "test@example.com",
//     "emailVisibility": true,
//     "password": "12345678",
//     "passwordConfirm": "12345678",
//     "name": "test",
//     "phone": "test",
//     "address1": "test",
//     "city": "test",
//     "country": "test",
//     "sex": "male",
// };

//   const record = await locals.pocketBase.collection('students').create(data);


  return {
    
	};


};

const signupSchema = z.object({
  email : z.string().email(),
  password : z.string().min(8),
  passwordConfirm : z.string().min(8),
  name : z.string(),
  phone : z.string(),
  address1 : z.string(),
  city : z.string(),
  country : z.string(),
  sex : z.string()
})

export const actions = { 
  default: async () => {

  }
}