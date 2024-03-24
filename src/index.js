import DonationLightbox from "./app/app";
import "./scss/main.scss";
//run();
window.DonationLightbox = DonationLightbox;
//window.addEventListener("load", function () {
  let donationLightbox = new DonationLightbox();
  // Set default options
  if (typeof window.DonationLightboxOptions !== "undefined") {
    donationLightbox.setOptions(window.DonationLightboxOptions);
  }
//});