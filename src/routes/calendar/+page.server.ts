// import { z } from "zod";

// const appointmentSchema = z.object({
//   startTime : z.string(),
//   endTime : z.string(),
//   student : z.string(),
//   status : z.string(),
//   paymentStatus : z.string(),
//   paymentDate : z.string(),
//   instructor : z.string()
// })

// const dummyAppointments = [
//   {
//     startTime: '2024-04-01 06:00:00.123Z',
//     endTime: '2024-04-01 07:00:00.123Z',
//     student: '9i28jmmq3hyojc7',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 07:00:00.123Z',
//     endTime: '2024-04-01 08:00:00.123Z',
//     student: '1a5t54a6m7gi19r',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 08:00:00.123Z',
//     endTime: '2024-04-01 09:00:00.123Z',
//     student: 'gsrzqqrurkotlu6',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 09:00:00.123Z',
//     endTime: '2024-04-01 10:00:00.123Z',
//     student: 'clvefdpspktt9a2',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 10:00:00.123Z',
//     endTime: '2024-04-01 11:00:00.123Z',
//     student: 'lmgc9b0hfsu099k',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 11:00:00.123Z',
//     endTime: '2024-04-01 12:00:00.123Z',
//     student: 'clvefdpspktt9a2',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 13:00:00.123Z',
//     endTime: '2024-04-01 14:00:00.123Z',
//     student: 'lmgc9b0hfsu099k',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
//   {
//     startTime: '2024-04-01 15:00:00.123Z',
//     endTime: '2024-04-01 16:00:00.123Z',
//     student: 'x2apdtkr5oyihjr',
//     status: 'completed',
//     paymentStatus: 'paid',
//     paymentDate: '2024-04-01 00:00:00.123Z',
//     instructor: 'if1r8nge7egtglz'
//   },
// ]


export const load = async ({locals}) => {

  // await locals.pocketBase.collection('appointments').create(dummyAppointments[0]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[1]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[2]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[3]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[4]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[5]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[6]);
  // await locals.pocketBase.collection('appointments').create(dummyAppointments[7]);

  // you can also fetch all records at once via getFullList
  const records = await locals.pocketBase.collection('appointments').getFullList({
    sort: 'startTime',
    // expand: 'student'
    expand: 'instructor,student'
  });

  return {records}

}