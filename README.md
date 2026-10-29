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

DMIN_KEY" http://localhost:5000/api/bookings
```

## Production

```
npm run build   # builds client/dist
npm start       # Express serves the API and the built site on one port
```
