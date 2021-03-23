## Next.js + Material UI + Mongo DB Repl.it Template

This is a template project using Next.js, Material UI and Mongo DB.

The MongoDb folows this structure:

```json
Categories {
  uid, name, description
}
Products {
  uid, name, unitPrice, unitsInStock, category
}
Customers {
  uid, name, email
}
Orders {
  uid, orderDate, total,
  products {
    uid, quantity, unitPrice
  } 
}
```

Create acount at https://www.mongodb.com/cloud/atlas to get a free mongodb cluster instance. Create a user/password and a connection string. Crate a database and a document with some categories entries. Create a connection string and put it at `.env` file, like:

```
MONGODB_URL=mongodb+srv://USER:PASS@cluster0.ejqaq.mongodb.net/DATABASE?retryWrites=true&w=majoritys
```

[Next.js](https://nextjs.org/) is an easy-to-use React framework that ships with server-side rendering, hot module reloading, and many other features out-of-the-box. 

By default, Repl.it runs the `dev` script, but you can configure it by changing the `run` field in `.replit`.

To add a new page simply add a .js, .jsx, .ts, or .tsx file in the `pages` directory. Pages are associated with a route based on their file name. For example `pages/about.js` is mapped to `/about`. You can even add dynamic route parameters with the filename.

Refer to the [Next.js docs](https://nextjs.org/docs/getting-started) to learn more.