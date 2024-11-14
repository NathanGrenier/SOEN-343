import {
    Html,
    Head,
    Body,
    Container,
    Hr,
    Section,
    Text,
    Row,
    Column,
    Preview,
  } from "@react-email/components";
  import * as React from "react";
  import { DeliveryEmailProps } from "./deliveryInterface.js";
  
  export interface BaseEmailTemplateProps {
    mainContent: React.ReactNode;
    deliveryContent: React.ReactNode;
    footerContent?: React.ReactNode;
    delivery: DeliveryEmailProps["delivery"];
    preview?: string;
  }
  
  export const BaseEmailTemplate: React.FC<BaseEmailTemplateProps> = ({
    mainContent,
    deliveryContent,
    footerContent,
    preview
  }) => (
    <Html>
      <Head />
      <Preview>{preview ? preview : ""}</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.global.defaultPadding}>{mainContent||defaultMainContent()}</Section>
          <Hr style={styles.global.hr} />
          <Section style={styles.global.defaultPadding}>{deliveryContent||defaultDeliveryContent()}</Section>
          <Hr style={styles.global.hr} />
          <Section style={styles.footerSection}>{footerContent || defaultFooter()}</Section>
        </Container>
      </Body>
    </Html>
  );
  
  const defaultMainContent = () => (
    <></>
  )

  const defaultDeliveryContent = () => (
    <></>
  );
  const defaultFooter = () => (
    <>
  <Section style={styles.menu.container}>
    <Row>
      <Text style={styles.menu.title}>Get Help</Text>
    </Row>
    <Row style={styles.menu.content}>
      <Column style={{ width: "33%" }} colSpan={1}>
        <Text style={styles.menu.text}>
          Shipping Status
        </Text>
      </Column>
      <Column style={{ width: "33%" }} colSpan={1}>
        <Text style={styles.menu.text}>
          Shipping & Delivery
        </Text>
      </Column>
      <Column style={{ width: "33%" }} colSpan={2}>
        <Text style={styles.menu.text}>
          Contact Options
        </Text>
      </Column>
    </Row>
    <Hr style={styles.global.hr} />
    <Row style={styles.menu.tel}>
      <Column>
        <Row>
          <Column style={{ width: "16px" }}>
          </Column>
          <Column>
            <Text style={{ ...styles.menu.text, marginBottom: "0" }}>
              1-800-000-0000
            </Text>
          </Column>
        </Row>
      </Column>
      <Column>
        <Text
          style={{
            ...styles.menu.text,
            marginBottom: "0",
          }}
        >
          5 am - 11 pm EST
        </Text>
      </Column>
    </Row>
  </Section>
  <Hr style={styles.global.hr} />
  <Section style={styles.global.paddingY}>
    <Row>
      <Text style={styles.global.heading}>SwiftSend.com</Text>
    </Row>
  <Hr style={{ ...styles.global.hr, marginTop: "12px" }} />
  <Row>
    <Text style={styles.footerText}>
      © 2024 SwiftSend.com All Rights Reserved. <br />
      Please contact us if you have any questions. (Replies to this email are
      not monitored.)
    </Text>
  </Row>
  </Section>
  </>
  );
  
  export const styles = {
    // Global styles
    global: {
      paddingX: {
        paddingLeft: "40px",
        paddingRight: "40px",
      },
      paddingY: {
        paddingTop: "22px",
        paddingBottom: "22px",
      },
      defaultPadding: {
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "22px",
        paddingBottom: "22px",
      },
      paragraphWithBold: {
        margin: "0",
        lineHeight: "2",
        fontWeight: "bold",
      },
      heading: {
        fontSize: "32px",
        lineHeight: "1.3",
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: "-1px",
      } as React.CSSProperties,
      text: {
        margin: "0",
        lineHeight: "2",
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
    },
  
    // Main styles
    main: {
      backgroundColor: "#ffffff",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
  
    // Container styles
    container: {
      margin: "10px auto",
      width: "600px",
      maxWidth: "100%",
      border: "1px solid #E5E5E5",
    },
  
    // Track styles
    track: {
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
    },
  
    // Message styles
    message: {
      padding: "40px 74px",
      textAlign: "center",
    } as React.CSSProperties,
  
    // Address title styles
    adressTitle: {
      margin: "0",
      lineHeight: "2",
      fontSize: "15px",
      fontWeight: "bold",
    },
  
    // Menu styles
    menu: {
      container: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
        backgroundColor: "#F7F7F7",
      },
      content: {
        paddingTop: "22px",
        paddingBottom: "22px",
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
    },
  
    // Footer styles
    footer: {
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
    },
  
    // Footer section styles
    footerSection: {
      padding: "20px",
      textAlign: "center" as "center",
    },
  
    footerText: {
      color: "#AFAFAF",
      fontSize: "12px",
    } as React.CSSProperties,
  };
  
  export default styles;
  