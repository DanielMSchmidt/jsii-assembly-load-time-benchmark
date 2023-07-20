var fs = require("fs");
var path = require("path");
var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
const avro = require("avsc");

console.log("Preparing benchmark...");
const JSON_PATH = path.join(__dirname, "aws.jsii.slim");
const AVRO_PATH = path.join(__dirname, "aws.jsii.avro");

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
const parameters = {
  name: "parameters",
  type: {
    type: "array",
    items: {
      type: "record",
      name: "parameter",
      fields: [
        docs,
        { name: "name", type: "string" },
        {
          name: "type",
          type: "record",
          fields: [{ name: "fqn", type: "string" }],
        },
      ],
    },
  },
};
const type = avro.Type.forValue({
  type: "record",
  name: "JSII",
  fields: [
    {
      name: "author",
      type: "record",
      fields: [
        { name: "name", type: "string" },
        { name: "roles", type: { type: "array", items: "string" } },
      ],
    },
    { name: "dependencies", type: "map", values: "string" },
    {
      name: "submodules",
      type: {
        type: "map",
        values: {
          type: "record",
          name: "submodule",
          fields: [
            lim,
            { name: "symbolId", type: "string" },
            {
              name: "readme",
              type: "record",
              fields: [{ name: "markdown", type: "string" }],
            },
          ],
        },
      },
    },

    {
      name: "types",
      type: "map",
      values: {
        type: "record",
        name: "type",
        fields: [
          { name: "assembly", type: "string" },
          { name: "base", type: "string" },
          docs,
          { name: "fqn", type: "string" },
          {
            name: "initializer",
            type: "record",
            fields: [docs, lim, parameters],
          },
          { name: "kind", type: "string" },
          lim,
          {
            name: "methods",
            type: "array",
            items: {
              name: "method",
              type: "record",
              fields: [{ name: "name", type: "string" }, lim, parameters],
            },
          },
          { name: "name", type: "string" },
          { name: "namespace", type: "string" },
        ],
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
