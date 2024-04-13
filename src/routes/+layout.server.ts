// +layout.server.ts - in routes


export const load = async ({locals}) => {



  // console.log(locals.pocketBase.authStore.model);
  
  if (!locals.pocketBase.authStore.isValid) {
    return({'authenticated':false}) as const
  }

  let name = locals.pocketBase.authStore.model!.name
  let record = locals.pocketBase.authStore.model!

  return {
    'authenticated':true,
    'name':name,
    'record':record,
    'authCollection':locals.pocketBase.authStore.model!.collectionName === 'students' ? 'students' : 'employees'  } as const


}