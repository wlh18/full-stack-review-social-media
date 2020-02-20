require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  authCtrl = require("./authController"),
  ctrl = require("./controller"),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
  app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
    secret: SESSION_SECRET
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db);
  console.log("DB connected");
});

//#auth endpoints
app.post("/api/login", authCtrl.login);
app.post("/api/register", authCtrl.register);
app.post("/api/logout", authCtrl.logout);
app.get("/api/user", authCtrl.getUser);

//#post endpoints
//?user id
app.get("/api/posts/:id", ctrl.getPosts);
//?user id
app.post("/api/posts/:id", ctrl.addPost);
//?post id
app.put("/api/posts/:id", ctrl.editPost);
//?post id
app.delete("/api/posts/:id", ctrl.deletePost);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));
