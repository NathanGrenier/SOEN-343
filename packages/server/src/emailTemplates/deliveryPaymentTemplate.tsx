import { DeliveryEmailProps } from "./deliveryInterface.js";
import * as React from "react";
import { BaseEmailTemplate, styles as s } from "./baseEmailTemplate.js";
import { Text, Hr, Row, Column, Section } from "@react-email/components";

export const DeliveryPaymentEmail: React.FC<DeliveryEmailProps> = ({ delivery }) => {
  const mainContent = (
    <>
      <Section style={styles.trackingSection}>
        <Row>
          <Column align="left">
            <Text style={styles.boldText}>Tracking Number</Text>
            <Text style={styles.trackingNumber}>{delivery.trackId}</Text>
          </Column>
        </Row>
      </Section>
      <Hr style={s.global.hr} />
      <Section style={styles.messageSection}>
        <Text style={styles.heading}>Payment Received!</Text>
        <Text style={styles.text}>
          Amount Charged: &nbsp;{delivery.amount}<br />
          Tracking Number: &nbsp;{delivery.trackId}<br /><br />

          We appreciate your trust in our service!<br /><br />
              
          Best regards,<br/>
          Swift Send Delivery Team
        </Text>
      </Section>
      <Hr style={s.global.hr} />
      <Section>
        <Text style={styles.addressTitle}>Shipping to: {delivery.dropOffFirstname} {delivery.dropOffLastname}</Text>
        <Text>{delivery.dropOffAddress}</Text>
        <Text style={styles.addressTitle}>From: {delivery.pickUpFirstname} {delivery.pickUpLastname}</Text>
        <Text>{delivery.pickUpAddress}</Text>
      </Section>
    </>
  );

  return <BaseEmailTemplate mainContent={mainContent} deliveryContent={defaultDeliveryContent(delivery)} footerContent={null} delivery={delivery} preview={"Payment Received for Your Delivery"}/>;
};

const defaultDeliveryContent = (delivery:DeliveryEmailProps["delivery"]) => (
  <Section style={s.global.defaultPadding}>
    <Row style={{ display: "inline-flex", marginBottom: 40}}>
      <Column style={{ width: "170px" }}>
        <Text style={s.global.paragraphWithBold}>Tracking Number</Text>
        <Text style={s.track.number}>{delivery.trackId}</Text>
      </Column>
      <Column style={{ width: "170px" }}>
        <Text style={s.global.paragraphWithBold}>Order Date</Text>
        <Text style={s.track.number}>{delivery.startDate}</Text>
      </Column>
      <Column style={{ width: "170px" }}>
        <Text style={s.global.paragraphWithBold}>Estimated Delivery</Text>
        <Text style={s.track.number}>{delivery.endDate}</Text>
      </Column>
    </Row>
  </Section>

 );

const styles = {
  trackingSection: { padding: "20px" },
  boldText: { fontWeight: "bold" },
  trackingNumber: { color: "#6F6F6F" },
  trackButton: { color: "#000", fontWeight: "500", textDecoration: "none" },
  messageSection: { textAlign: "center" as "center", padding: "20px" },
  heading: { fontSize: "24px", fontWeight: "700" },
  text: { color: "#747474" },
  addressTitle: { fontWeight: "bold", marginTop: "12px" },
};
