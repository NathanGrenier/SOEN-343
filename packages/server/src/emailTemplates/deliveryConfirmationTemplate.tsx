import { DeliveryEmailProps } from "./deliveryInterface.js";
import * as React from "react";
import { BaseEmailTemplate, styles as s} from "./baseEmailTemplate.js";
import { Text, Hr, Row, Column, Section} from "@react-email/components";

export const DeliveryConfirmationEmail: React.FC<DeliveryEmailProps> = ({ delivery }) => {
  return <BaseEmailTemplate mainContent={mainContent(delivery)} deliveryContent={deliveryContent()} footerContent={null} delivery={delivery} preview={"Get your delivery summary"}/>;
};

const mainContent = (delivery: DeliveryEmailProps["delivery"]) => (
  <>
    <Section style={styles.trackingSection}>
      <Row>
        <Column align="right">
          <Text style={styles.boldText}>Tracking Number</Text>
          <Text style={styles.trackingNumber}>{delivery.trackId}</Text>
        </Column>
      </Row>
    </Section>
    <Hr style={s.global.hr} />
    <Section style={styles.messageSection}>
      <Text style={styles.heading}>Confirmation</Text>
      <Text style={styles.text}>
        You delivery has reached his final destination!<br/>

        We appreciate your trust in our service!<br /><br />
              
        Best regards,<br />
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
const deliveryContent = () => (
  <Section style={s.global.defaultPadding}>
    <Text style={styles.text}> Your delivery was delivered today!</Text>
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
