const { toTypeScript } = require("@ovotech/avro-ts");

const avro = {
  type: "record",
  name: "User",
  fields: [
    { name: "id", type: ["null", "int"], default: null },
    { name: "username", type: "string" },
  ],
};

const ts = toTypeScript(avro);

console.log(ts);
