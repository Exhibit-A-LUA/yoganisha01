export type Employee = {
  id: string;
  email: string;
  name: string;
  photo?: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  birthDate?: string; // is there a date type
  sex: string;
  roles: string;
}

export function validateEmployee(data: any): data is Employee {
  const idIsString = typeof data.id === "string";
  const emailIsString = typeof data.email === "string";
  const nameIsString = typeof data.name === "string";
  const phoneIsString = typeof data.phone === "string";
  const addressIsString = typeof data.address1 === "string";
  const cityIsString = typeof data.city === "string";
  const countryIsString = typeof data.country === "string";
  const sexIsString = typeof data.sex === "string";
  const roles = data.roles
  const rolesIsValid = 
    Array.isArray(roles) &&
    roles.length > 0 &&
    roles.reduce<boolean>(
      (prev, cur) => (prev ? typeof cur === "string" : prev),
      true
    )
  return (
    idIsString && 
    emailIsString &&
    nameIsString &&
    phoneIsString &&
    addressIsString &&
    cityIsString &&
    countryIsString &&
    sexIsString &&
    rolesIsValid
  )

}

export type Student = {
  id: string;
  email: string;
  name: string;
  photo?: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  birthDate: string; // is there a date type
  sex: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export function validateStudent(data: any): data is Student {
  const idIsString = typeof data.id === "string";
  const emailIsString = typeof data.email === "string";
  const nameIsString = typeof data.name === "string";
  const phoneIsString = typeof data.phone === "string";
  const addressIsString = typeof data.address1 === "string";
  const cityIsString = typeof data.city === "string";
  const countryIsString = typeof data.country === "string";
  const sexIsString = typeof data.sex === "string";

  return (
    idIsString && 
    emailIsString &&
    nameIsString &&
    phoneIsString &&
    addressIsString &&
    cityIsString &&
    countryIsString &&
    sexIsString 
  )
}

export type Appointment = {
  id: string;
  startTime: string;
  endTime: string;
  student: Student;
  status: string;
  paymentStatus: string;
  paymentDate?: string;
  instructor: Employee;
}

export function validateAppointment(data: any): data is Appointment {
  const idIsString = typeof data.id === "string";
  const startTimeIsString = typeof data.startTime === "string";
  const endTimeIsString = typeof data.endTime === "string";
  const studentIsValid = validateStudent(data.student);
  const statusIsString = typeof data.status === "string";
  const paymentStatusIsString = typeof data.paymentStatus === "string";
  const paymentDateIsString = typeof data.paymentDate === "string";
  const instructorIsValid = validateEmployee(data.instructor);

  return (
    idIsString && 
    startTimeIsString &&
    endTimeIsString &&
    studentIsValid &&
    statusIsString &&
    paymentStatusIsString &&
    paymentDateIsString &&
    instructorIsValid 
  )
}

