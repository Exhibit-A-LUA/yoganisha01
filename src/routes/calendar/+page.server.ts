export const load = async ({locals}) => {

  // you can also fetch all records at once via getFullList
const records = await locals.pocketBase.collection('appointments').getFullList({
  sort: '-created',
});

  return {records}


}