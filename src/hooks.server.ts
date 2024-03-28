import {
  POCKETBASE_PRIVATE_EMAIL,
  POCKETBASE_PRIVATE_PASSWORD
} from "$env/static/private";
import { pb } from "$lib/pocketbase";
import { fail } from "@sveltejs/kit"
import PocketBase from "pocketbase"

export const handle = async ({event, resolve}) => {
  event.locals.pocketBase = new PocketBase('http://127.0.0.1:8090')

  // code taken from your Social Media Platform tutorial

  try {
    event.locals.pocketBase.authStore.loadFromCookie(
      event.request.headers.get("cookie") ?? ""
    );

    await event.locals.pocketBase.collection("students").authRefresh();
  } catch (error) {
    let validated = false
    try {
      await event.locals.pocketBase.collection("employees").authRefresh();
      validated = true;
    } catch (error) {
      event.locals.pocketBase.authStore.clear();
    }
    if (!validated)
      event.locals.pocketBase.authStore.clear();
    
  }

  event.locals.pocketBaseAdmin = new PocketBase('http://127.0.0.1:8090');

  try {
    await event.locals.pocketBaseAdmin.admins.authWithPassword(
      POCKETBASE_PRIVATE_EMAIL,
      POCKETBASE_PRIVATE_PASSWORD
    );
  } catch (error) {
    throw fail(500);
  }

  pb.set(event.locals.pocketBase);

  const response =  await resolve(event);

  response.headers.set(
    "set-cookie",
    event.locals.pocketBase.authStore.exportToCookie({
      sameSite: true,
      secure: false,
      httpOnly: false
    })
  );

  return response;
}