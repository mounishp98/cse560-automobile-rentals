export type Customer = {
  customer_id: string;
  driving_license: string;
};

export type Rental = {
  rental_id: string;
  vehicle_id: string;
  customer_id: string;
  pickuptime: Date;
  dropofftime: Date;
  payment_id: string;
  trip_cost: Number;
  employee_id: string;
};
