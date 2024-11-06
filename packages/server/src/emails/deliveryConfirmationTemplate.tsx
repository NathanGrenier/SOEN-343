import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import { DeliveryEmailProps } from "./deliveryInterface";
  
  export const DeliveryConfirmationEmail: React.FC<DeliveryEmailProps> = ({ delivery }) => (
    <Html>
      <Head />
      <Preview>Get your order summary, estimated delivery date and more</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Row>
              <Column>
                <Text style={global.paragraphWithBold}>Tracking Number</Text>
                <Text style={track.number}>{delivery.trackId}</Text>
              </Column>
              <Column align="right">
                <Link style={global.button}>Track Package</Link>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            {/* <Img
              src= "./logo.png"
              width="66"
              height="22"
              alt="SwiftSend"
              style={{ margin: "auto" }}
            /> */}
            <Heading style={global.heading}>Confimation</Heading>
            <Text style={global.text}>
              You delivery request has been confirmed! Use the link above to track its progress.
            </Text>
            <Text style={{ ...global.text, marginTop: 24 }}>
              We've also charged your payment method for the cost of your order
              and will be removing any authorization holds. For payment details,
              please visit our 'Tracking' page.<br />

              We appreciate your trust in our service!<br /><br />
              
              Best regards,<br />
              Swift Send Delivery Team
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={adressTitle}>Shipping to: {delivery.dropOffFirstname} {delivery.dropOffLastname}</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {delivery.dropOffAddress}
            </Text>
            <Text style={adressTitle}>From: {delivery.pickUpFirstname} {delivery.pickUpLastname}</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {delivery.pickUpAddress}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex", marginBottom: 40 }}>
              <Column style={{ width: "170px" }}>
                <Text style={global.paragraphWithBold}>Tracking Number</Text>
                <Text style={track.number}>{delivery.trackId}</Text>
              </Column>
              <Column style={{ width: "170px" }}>
                <Text style={global.paragraphWithBold}>Order Date</Text>
                <Text style={track.number}>{delivery.startDate}</Text>
              </Column>
              <Column style={{ width: "170px" }}>
                <Text style={global.paragraphWithBold}>Estimated Delivery</Text>
                <Text style={track.number}>{delivery.endDate}</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Hr style={global.hr} />
          <Section style={menu.container}>
            <Row>
              <Text style={menu.title}>Get Help</Text>
            </Row>
            <Row style={menu.content}>
              <Column style={{ width: "33%" }} colSpan={1}>
                <Link href="/" style={menu.text}>
                  Shipping Status
                </Link>
              </Column>
              <Column style={{ width: "33%" }} colSpan={1}>
                <Link href="/" style={menu.text}>
                  Shipping & Delivery
                </Link>
              </Column>
              <Column style={{ width: "33%" }} colSpan={2}>
                <Link href="/" style={menu.text}>
                  Contact Options
                </Link>
              </Column>
            </Row>
            <Hr style={global.hr} />
            <Row style={menu.tel}>
              <Column>
                <Row>
                  <Column style={{ width: "16px" }}>
                    {/* <Img
                      src={'./logo.png'}
                      width="16px"
                      height="26px"
                      style={{ paddingRight: "14px" }}
                    /> */}
                  </Column>
                  <Column>
                    <Text style={{ ...menu.text, marginBottom: "0" }}>
                      1-800-000-0000
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column>
                <Text
                  style={{
                    ...menu.text,
                    marginBottom: "0",
                  }}
                >
                  5 am - 11 pm EST
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Row>
              <Text style={global.heading}>SwiftSend.com</Text>
            </Row>
          <Hr style={{ ...global.hr, marginTop: "12px" }} />
            <Row>
              <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
                Please contact us if you have any questions. (If you reply to this
                email, we won't be able to see it.)
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                © 2024 SwiftSend.com All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default DeliveryConfirmationEmail;
  
  const paddingX = {
    paddingLeft: "40px",
    paddingRight: "40px",
  };
  
  const paddingY = {
    paddingTop: "22px",
    paddingBottom: "22px",
  };
  
  const paragraph = {
    margin: "0",
    lineHeight: "2",
  };
  
  const global = {
    paddingX,
    paddingY,
    defaultPadding: {
      ...paddingX,
      ...paddingY,
    },
    paragraphWithBold: { ...paragraph, fontWeight: "bold" },
    heading: {
      fontSize: "32px",
      lineHeight: "1.3",
      fontWeight: "700",
      textAlign: "center",
      letterSpacing: "-1px",
    } as React.CSSProperties,
    text: {
      ...paragraph,
      color: "#747474",
      fontWeight: "500",
    },
    button: {
      border: "1px solid #929292",
      fontSize: "16px",
      textDecoration: "none",
      padding: "10px 0px",
      width: "220px",
      display: "block",
      textAlign: "center",
      fontWeight: 500,
      color: "#000",
    } as React.CSSProperties,
    hr: {
      borderColor: "#E5E5E5",
      margin: "0",
    },
  };
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "10px auto",
    width: "600px",
    maxWidth: "100%",
    border: "1px solid #E5E5E5",
  };
  
  const track = {
    container: {
      padding: "22px 40px",
      backgroundColor: "#F7F7F7",
    },
    number: {
      margin: "12px 0 0 0",
      fontWeight: 500,
      lineHeight: "1.4",
      color: "#6F6F6F",
    },
  };
  
  const message = {
    padding: "40px 74px",
    textAlign: "center",
  } as React.CSSProperties;
  
  const adressTitle = {
    ...paragraph,
    fontSize: "15px",
    fontWeight: "bold",
  };

  
  const menu = {
    container: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "20px",
      backgroundColor: "#F7F7F7",
    },
    content: {
      ...paddingY,
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    title: {
      paddingLeft: "20px",
      paddingRight: "20px",
      fontWeight: "bold",
    },
    text: {
      fontSize: "13.5px",
      marginTop: 0,
      fontWeight: 500,
      color: "#000",
    },
    tel: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "32px",
      paddingBottom: "22px",
    },
  };

  
  const footer = {
    policy: {
      width: "166px",
      margin: "auto",
    },
    text: {
      margin: "0",
      color: "#AFAFAF",
      fontSize: "13px",
      textAlign: "center",
    } as React.CSSProperties,
  };
  
  