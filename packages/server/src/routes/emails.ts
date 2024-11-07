// routes/emailRoutes.js
import express, {Router} from "express";
import asyncHandler from "express-async-handler";
import { Resend } from "resend";
import DeliveryConfirmationEmail from '../emailTemplates/deliveryConfirmationTemplate.js';
import DeliveryShippedEmail from '../emailTemplates/deliveryShippedTemplate.js';
import DeliveryPaymentEmail from '../emailTemplates/deliveryPaymentTemplate.js';
import { DeliveryEmailProps } from "../emailTemplates/deliveryInterface.js";
import pool from '../database/db.js';
import dotenv from 'dotenv';

dotenv.config();


const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router
.post(
    "/send-delivery-confirmation/:id",
    asyncHandler(async (req , res): Promise<void> => {
      const id = req.params.id;
      const delivery = await getDeliveryData(id);

      console.log(delivery)

      const { data, error} = await resend.emails.send({
        from: 'swiftsend@christellecharles.agency',
        to: delivery.delivery.email,
        subject: 'Delivery Confirmation',
        react: DeliveryConfirmationEmail(delivery),
      });

      if (error) {
        res.status(400).json({error})
      } else {
        console.log("Email sent successfully")
        res.status(200).json({data});
      }

    })
  )

  .post(
    "/send-delivery-shipped/:id",
    asyncHandler(async (req , res): Promise<void> => {
      const id = req.params.id;
      const delivery = await getDeliveryData(id);

      console.log(delivery)

      const { data, error} = await resend.emails.send({
        from: 'swiftsend@christellecharles.agency',
        to: delivery.delivery.email,
        subject: 'Delivery Shipped',
        react: DeliveryShippedEmail(delivery),
      });

      if (error) {
        res.status(400).json({error})
      } else {
        console.log("Email sent successfully")
        res.status(200).json({data});
      }

    })
  )

  .post(
    "/send-delivery-payment/:id",
    asyncHandler(async (req , res): Promise<void> => {
      const id = req.params.id;
      const delivery = await getDeliveryData(id);

      console.log(delivery)

      const { data, error} = await resend.emails.send({
        from: 'swiftsend@christellecharles.agency',
        to: delivery.delivery.email,
        subject: 'Payment Received',
        react: DeliveryPaymentEmail(delivery),
      });

      if (error) {
        res.status(400).json({error})
      } else {
        console.log("Email sent successfully")
        res.status(200).json({data});
      }

    })
  );
  
  
  const getDeliveryData = async(id:string) => {
    const result  = await pool.query(`SELECT * FROM Packages WHERE id = ${id}`);
        const packages = result.recordset[0]
        const startDate = packages.dropOffDate.toDateString()
        const endDate = packages.pickUpDate.toDateString()
    
  
        const deliveryData: DeliveryEmailProps = {
          delivery: {
            trackId: packages.id,
            dropOffFirstname: packages.dropOffName,
            dropOffLastname: packages.dropOffLastname,
            dropOffAddress: packages.dropOffAddress,
            pickUpFirstname: packages.pickUpName,
            pickUpLastname: packages.pickUpLastName,
            pickUpAddress: packages.pickUpAddress,
            startDate: startDate,
            endDate: endDate,
            amount: packages.amount,
            email: packages.email,
          },
        };
    return deliveryData;
    
  }

export default router;