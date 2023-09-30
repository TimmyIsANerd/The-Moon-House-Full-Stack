// Home Page
const home = (req, res) => {
  res.render("index", {
    title: "The Perfect Hub To Crypto Education & Growth.",
  });
};

// Invest Page
const invest = (req, res) => {
  res.render("invest", { title: "Let Us Build Your Wealth" });
};

// Contact Us Route
const contact_us = (req, res) => {
  res.render("contact", { title: "Contact Us" });
};

// Privacy Policy
const privacy_policy = (req, res) => {
  res.render("privacy", { title: "Our Privacy Policy" });
};

// Terms & Conditions
const terms = (req, res) => {
  res.render("terms", { title: "Terms & Conditions" });
};

module.exports = {
  home,
  invest,
  contact_us,
  privacy_policy,
  terms,
};
