// QUIZ CLASH app settings. Edit and rebuild the app.
window.QC_CONFIG = {
  // Base of challenge links sent on WhatsApp. With your own domain set up (README step 6)
  // use 'https://YOUR-DOMAIN/c' so links open the app directly.
  shareBase: 'https://hsnbh.github.io/quiz-clash-play/',
  // Optional: a URL to the questions JSON exported from the admin panel. Leave '' to use the built-in bank.
  questionsUrl: '',
  // Online play (Firebase Realtime Database). Paste your Firebase web app config here (README, step 9).
  firebase: {
    apiKey: 'AIzaSyC8ljxWSQczZVL9scuSJhBRFnI7XLp2Fyk',
    authDomain: 'quiz-clash-d0f66.firebaseapp.com',
    databaseURL: 'https://quiz-clash-d0f66-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'quiz-clash-d0f66',
    appId: '1:860951580871:web:01d4576755c163435a6ee2'
  },
  // Random matchmaking and ranked results. Can also be switched on later from the Firebase console
  // (Realtime Database → config/matchmaking = true, config/ranked = true) without a new build. See docs/ONLINE_AR.md.
  matchmaking: false,
  ranked: false,
  // Shown in the privacy policy (Google Play requires a contact). Put your support email here.
  contactEmail: '',
  maxBurns: 2,      // burns allowed per match
  adsPerDay: 10     // rewarded ads a player can watch per day
};
