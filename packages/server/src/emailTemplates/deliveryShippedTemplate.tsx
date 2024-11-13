import { DeliveryEmailProps } from "./deliveryInterface.js";
import * as React from "react";
import { BaseEmailTemplate, styles as s} from "./baseEmailTemplate.js";
import { Text, Hr, Row, Column, Section } from "@react-email/components";

export const DeliveryShippedEmail: React.FC<DeliveryEmailProps> = ({ delivery }) => {
  return <BaseEmailTemplate mainContent={mainContent(delivery)} deliveryContent={defaultDeliveryContent(delivery)} footerContent={null} delivery={delivery} preview={"Get your order summary, estimated delivery date and more"}/>;
};

const mainContent = (delivery:DeliveryEmailProps["delivery"]) => (
  <>
    <Section style={styles.trackingSection}>
      <Row>
        <Column align="right">
          <Text style={styles.boldText}>Tracking Number</Text>
          <Text style={styles.trackingNumber}>{delivery.trackId}</Text>
        </Column>
      </Row>
    </Section>
    <Hr style={styles.hr} />
    <Section style={styles.messageSection}>
      <Text style={styles.heading}>It's on its way!</Text>
      <Text style={styles.text}>
        Good news! Your delivery has been dispatched and is currently on its way.
        For more details please visit our 'Tracking' page.<br/>

        We appreciate your trust in our service!<br /><br />
              
        Best regards,<br />
        Swift Send Delivery Team
      </Text>
    </Section>
    <Hr style={styles.hr} />
    <Section>
      <Text style={styles.addressTitle}>Shipping to: {delivery.dropOffFirstname} {delivery.dropOffLastname}</Text>
      <Text>{delivery.dropOffAddress}</Text>
      <Text style={styles.addressTitle}>From: {delivery.pickUpFirstname} {delivery.pickUpLastname}</Text>
      <Text>{delivery.pickUpAddress}</Text>
    </Section>
  </>
);

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
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};
