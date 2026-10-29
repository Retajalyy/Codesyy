import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

const transporter = SMTP_USER
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

export async function sendBookingEmails(b) {
  if (!transporter) {
    console.warn('SMTP not configured - emails skipped (booking was still saved).');
    return;
  }

  // 1) Admin notification
  await transporter.sendMail({
    from: `"Codesyy" <${SMTP_USER}>`,
    to: ADMIN_EMAIL,
    subject: `New Trial Booking: ${b.childName}`,
    text: [
      `Parent: ${b.parentName} (${b.parentEmail})`,
      `Phone: ${b.phone}`,
      `Child: ${b.childName}`,
      `Date: ${b.bookingDate}`,
      `Time (CDT): ${b.bookingTime}`,
      `Area of interest: ${b.areaOfInterest}`,
    ].join('\n'),
  });

  // 2) Parent confirmation
  await transporter.sendMail({
    from: `"Codesyy" <${SMTP_USER}>`,
    to: b.parentEmail,
    subject: `Your Codesyy free trial is booked, ${b.parentName}!`,
    text: [
      `Hi ${b.parentName},`,
      '',
      `${b.childName}'s free trial class is booked for ${b.bookingDate} at ${b.bookingTime} (CDT).`,
      'We will email the live meeting link 1 hour before the class starts.',
      '',
      'See you soon!',
      'The Codesyy Team',
    ].join('\n'),
  });
}
