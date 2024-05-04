export type Customer = {
  customer_id: string;
  driving_license: string;
  name: string;
  dob: string;
  address_id: string;
  phone: string;
  email: string;
};

export type Rental = {
  rental_id: string;
  vehicle_id: string;
  customer_id: string;
  driving_license: string;
  name: string;
  email: string;
  registration: string;
  model: string;
  type: string;
  odometer_reading: Number;
  pickuptime: string;
  dropofftime: string;
  payment_id: string;
  trip_cost: Number;
  employee_id: string;
};
