import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Head,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  phone,
  email,
  location,
  service,
  message,
}: ContactFormEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{ backgroundColor: "#f3f3f3", padding: "20px" }}>
        <Container>
          <Text>You&#39;ve received a new contact form message</Text>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Phone Number:</strong> {phone}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Location:</strong> {location}
          </Text>
          <Text>
            <strong>Service:</strong> {service}
          </Text>
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
