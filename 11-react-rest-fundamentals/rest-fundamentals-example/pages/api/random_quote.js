// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// this is a backend endpoint that is available to us in next.js
export default function handler(req, res) {
  // make an array of 5 quotes from the interwebs
  const quotes = [
    {
      "author": "Thucydides",
      "quote": "Self-control is the chief element in self-respect, and self-respect is the chief element in courage."
    },
    {
      "author": "Seneca",
      "quote": "True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing."
    }
  ]
  // get a random item from it

  // return it.

  res.status(200).json({ name: 'John Doe' })
}
