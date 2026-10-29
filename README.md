# Codesyy — MERN version

MongoDB + Express + React (Vite) + Node. Same design as the original HTML site.

```
codesyy-mern/
├── client/   React app (components: Header, Hero, Courses, BookingForm, Faq, Footer)
└── server/   Express API + MongoDB (Booking model, email sending)
```

## Run it

1. Install MongoDB locally (or use a free MongoDB Atlas URI).
2. `npm run install-all`
3. `cp server/.env.example server/.env` and fill it in
4. `npm run dev`
   - Site: http://localhost:5173
   - API:  http://localhost:5000

## What changed from the plain HTML/JS version

| Before | Now |
|---|---|
| FormSubmit.co (admin email) + EmailJS (parent email) | One `POST /api/bookings` call. The server saves to MongoDB, then sends both emails with Nodemailer. |
| Keys/IDs in browser JS | Secrets live in `server/.env` |
| `script.js` DOM code (filters, FAQ, form) | React state in `Courses.jsx`, `Faq.jsx`, `BookingForm.jsx` |
| Course cards copy-pasted in HTML | One array in `client/src/data/courses.js` |

## Emails

Fill `SMTP_USER` / `SMTP_PASS` in `server/.env` (for Gmail use an App Password).
If left blank, bookings are still saved; emails are just skipped.

## Viewing bookings

```
curl -H "x-admin-key: YOUR_ADMIN_KEY" http://localhost:5000/api/bookings
```

## Production

```
npm run build   # builds client/dist
npm start       # Express serves the API and the built site on one port
```
