const express = require("express");
const bodyParser = require("body-parser");

import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import {facebook, google} from './config.js';
import { userInfo } from "os";

//******************auth stuff, poss abstract this out later**** */

passport.use(new FacebookStrategy(facebook,
  async (accessToken, refreshToken, profile, done) =>
    done(null, transformFacebookProfile(profile._json))
  ));

passport.use(new GoogleStrategy(google,
  async (accessToken, refreshToken, profile, done) =>
    done(null, transformGoogleProfile(profile._json))
  ))

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));



//********************** */


const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/auth/facebook'}),
    (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user))
);

app.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

app.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: '/auth/google'}), 
    (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)))

//placeholder get route
app.get("*", (req, res) => {
  res.status(200).send();
});

//placeholder post route
app.post("*", (req, res) => {
  res.status(200).send();
});

const server = app.listen(PORT);
console.log(`Node server listening at http://localhost:${PORT}`);
