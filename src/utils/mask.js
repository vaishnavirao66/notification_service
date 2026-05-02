function maskPII(input) {
  if (!input) return "****";

  if (input.includes("@")) {
    const [name, domain] = input.split("@");
    return name[0] + "***@" + domain;
  }

  if (input.length >= 4) {
    return "******" + input.slice(-4);
  }

  return "****";
}

module.exports = maskPII;