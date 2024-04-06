
export const load = async ({locals}) => {



  console.log(locals.pocketBase.authStore);
  
  if (!locals.pocketBase.authStore.isValid) {
    return({'authenticated':false}) as const
  }

  return {
    'authenticated':true,
    'authCollection':locals.pocketBase.authStore.model!.collectionName === 'students' ? 'students' : 'employees'  } as const


}