
// Exemple serveur avec Twilio
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendSms(to: string, body: string) {
  if (!/^\+[1-9]\d{7,14}$/.test(to)) {
    throw new Error("Numéro invalide");
  }

  return client.messages.create({
    to,
    from: process.env.TWILIO_PHONE_NUMBER,
    body,
  });
}
crée un html pour envoyer des sms bomba dans un numéro WhatsApp 
100x 300x 200x120x
endroit pour mettre le numéro de la cible 
