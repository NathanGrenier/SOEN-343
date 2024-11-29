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

type ContactEmailProps = {
  message: string;
  email: string;
};

export default function ContactEmail({ message, email }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Contact Email</Preview>
      <Body className="bg-gray-100 p-5 font-sans">
        <Container className="rounded-lg bg-white p-6 shadow-md">
          <Section>
            <Text className="text-4xl font-bold">
              Contact-Us Request from Swiftsend
            </Text>
          </Section>
          <Hr className="my-4 border-gray-300" />
          <Section>
            <Text className="text-lg font-bold">From: {email}</Text>
          </Section>
          <Hr className="my-4 border-gray-300" />
          <Section>
            <Text className="text-base">{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
