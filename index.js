var fs = require("fs");
var path = require("path");
var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
const avro = require("avsc");

console.log("Preparing benchmark...");
const JSON_PATH = path.join(__dirname, "fake.json");
const AVRO_PATH = path.join(__dirname, "fake.jsii.avro");

const json = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
const lim = {
  name: "locationInModule",
  type: "record",
  fields: [
    { name: "filename", type: "string" },
    { name: "line", type: "int" },
  ],
};
const docs = {
  name: "docs",
  type: "record",
  fields: [{ name: "summary", type: "string" }],
};

const type = avro.Type.forValue({
  type: "record",
  name: "JSII",
  fields: [
    {
      name: "types",
      type: "map",
      values: {
        type: "record",
        fields: [{ name: "assembly", type: "string" }],
      },
    },
  ],
});

fs.writeFileSync(AVRO_PATH, type.toBuffer(json));

console.log("Starting benchmark...");

const result = suite
  .add("JSON.parse", () => {
    JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  })
  .add("avro", () => {
    type.fromBuffer(fs.readFileSync(AVRO_PATH, "utf8"));
  })
  .run({});
console.log(result);
