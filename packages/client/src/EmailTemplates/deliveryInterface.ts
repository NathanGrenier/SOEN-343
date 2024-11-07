export interface DeliveryEmailProps {
  delivery: {
    trackId: string;
    dropOffFirstname: string;
    dropOffLastname: string;
    dropOffAddress: string;
    pickUpFirstname: string;
    pickUpLastname: string;
    pickUpAddress: string;
    startDate: string;
    endDate: string;
    amount: number;
    paymentMethod: string;
  };
}
