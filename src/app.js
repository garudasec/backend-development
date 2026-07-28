import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


// this use method is used for middleware or configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


// data will come from different place like url, json, body, direct form, so we have set limit
app.use(
  express.json({
    limit: "16kb",
  })
);

// in url, sometimes it set space with + or %, so here set encoder so that it set space with %
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to store public asset like some files/images
app.use(express.static("public"));

// to access and set the client's cookie
app.use(cookieParser())




// routes import
import userRouter from "./routes/user.route.js"


// routes declaration
app.use("/api/v1/users", userRouter )






export { app };
