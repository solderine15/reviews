// Edit this file to set up the review page. No other file needs changing.
window.REVIEW_CONFIG = {
  // Free key from https://web3forms.com (enter the email address that should receive feedback).
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

  // Used when the QR/NFC URL has no ?loc= or an unknown one.
  defaultLocation: "choisy",

  // One entry per restaurant. The key is what goes in the URL: https://your-site/?loc=choisy
  // placeId: find it at https://developers.google.com/maps/documentation/places/web-service/place-id
  locations: {
    choisy: {
      name: "Choisy-le-Roi",
      // 4 Avenue Anatole France, 94600 Choisy-le-Roi
      // reviewUrl: the "Ask for reviews" link from Google Business Profile. Takes priority over placeId.
      reviewUrl: "https://g.page/r/Cb9miPzac14iEBE/review",
    },
  },
};
