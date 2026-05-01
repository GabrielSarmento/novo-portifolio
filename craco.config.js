// craco.config.js — configuração simples para o CRA + Tailwind
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
