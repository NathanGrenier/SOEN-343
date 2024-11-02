// routes/emailRoutes.js
import express from "express";
import * as http from 'http';
import asyncHandler from "express-async-handler";
import { Resend } from "resend";
import { DeliveryEmailProps } from "../emails/deliveryInterface";
import DeliveryShippedEmail from '../emails/deliveryShippedTemplate.js';

const router = express.Router();
const resend = new Resend("re_5DuutaCX_Km2moRVmPWf4w7jm1S83yiSH");


router.post(
    "/:id",
    asyncHandler(async (req , _): Promise<void> => {
      let id;
      if (req instanceof http.IncomingMessage) {
        if (req !== null) {
          if (req.url !== undefined) {
            const path = req.url;
            id = path.replace("/", "");
          }
        }
      }

      console.log(id);
      // add logic to get db data using the package Id
      const deliveryData: DeliveryEmailProps = {
        delivery: {
          trackId: "123456",
          dropOffFirstname: "John",
          dropOffLastname: "Doe",
          dropOffAddress: "123 Delivery Lane",
          pickUpFirstname: "Jane",
          pickUpLastname: "Smith",
          pickUpAddress: "456 Pickup Ave",
          startDate: "2024-10-31",
          endDate: "2024-11-10",
          amount: 0.0,
          paymentMethod: "Credit Card", 
        },
      };

      // const { data, error } = 
      await resend.emails.send({
        from: 'swiftsend@christellecharles.agency',
        to: 'christelle.a.charles@gmail.com',
        subject: 'Delivery Shipped',
        react: DeliveryShippedEmail(deliveryData),
      });

    })
  );
  
  

export default router;