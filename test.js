var fs = require("fs");
var path = require("path");
var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
const avro = require("avsc");

console.log("Preparing benchmark...");
const JSON_PATH = path.join(__dirname, "aws.jsii.slim");
const AVRO_PATH = path.join(__dirname, "aws.jsii.avro");

// const json = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
// const lim = {
//   name: "locationInModule",
//   type: "record",
//   fields: [
//     { name: "filename", type: "string" },
//     { name: "line", type: "int" },
//   ],
// };
// const docs = {
//   name: "docs",
//   type: "record",
//   fields: [{ name: "summary", type: "string" }],
// };
// const parameters = {
//   name: "parameters",
//   type: {
//     type: "array",
//     items: {
//       type: "record",
//       name: "parameter",
//       fields: [
//         docs,
//         { name: "name", type: "string" },
//         {
//           name: "type",
//           type: "record",
//           fields: [{ name: "fqn", type: "string" }],
//         },
//       ],
//     },
//   },
// };
// const type = avro.Type.forValue({
//   type: "record",
//   fields: [
//     { name: "name", type: "string" },
//     // {
//     //   name: "author",
//     //   type: "record",
//     //   fields: [

//     //     // { name: "roles", type: { type: "array", items: "string" } },
//     //   ],
//     // },
//   ],
// });

const json = {
  typed: {
    "aws.accessanalyzerAnalyzer": {
      assembly: "aws",
      base: "cdktf.ComplexObject",
      fqn: "aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference",
      initializer: {
        locationInModule: {
          filename: "providers/aws/appmesh-gateway-route/index.ts",
          line: 946,
        },
        parameters: [
          {
            docs: {
              summary: "The parent resource.",
            },
            name: "terraformResource",
            type: {
              fqn: "cdktf.IInterpolatingParent",
            },
          },
          {
            docs: {
              summary:
                "The attribute on the parent resource this class is referencing.",
            },
            name: "terraformAttribute",
            type: {
              primitive: "string",
            },
          },
        ],
      },
      kind: "class",
      locationInModule: {
        filename: "providers/aws/appmesh-gateway-route/index.ts",
        line: 939,
      },
      name: "AppmeshGatewayRouteSpecHttpRouteMatchOutputReference",
      namespace: "appmeshGatewayRoute",
      properties: [
        {
          immutable: true,
          locationInModule: {
            filename: "providers/aws/appmesh-gateway-route/index.ts",
            line: 980,
          },
          name: "prefixInput",
          optional: true,
          type: {
            primitive: "string",
          },
        },
        {
          locationInModule: {
            filename: "providers/aws/appmesh-gateway-route/index.ts",
            line: 973,
          },
          name: "prefix",
          type: {
            primitive: "string",
          },
        },
        {
          locationInModule: {
            filename: "providers/aws/appmesh-gateway-route/index.ts",
            line: 950,
          },
          name: "internalValue",
          optional: true,
          type: {
            fqn: "aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch",
          },
        },
      ],
      symbolId:
        "appmesh-gateway-route/index:AppmeshGatewayRouteSpecHttpRouteMatchOutputReference",
    },
  },
};

console.log(JSON.stringify(avro.Type.forValue(json).schema(), null, 2));

const jsiiType = {
  name: "type",
  type: [
    {
      type: "record",
      fields: [{ name: "fqn", type: "string" }],
    },
    {
      type: "record",
      fields: [{ name: "primitive", type: "string" }],
    },

    {
      type: "record",
      fields: [
        {
          name: "collection",
          type: {
            type: "record",
            fields: [
              { name: "elementtype", type: jsiiType },
              { name: "kind", type: "string" },
            ],
          },
        },
      ],
    },
  ],
};

const types = {
  type: "record",
  fields: [
    {
      name: "assembly",
      type: "string",
    },
    {
      name: "base",
      type: "string",
    },
    {
      name: "fqn",
      type: "string",
    },
    {
      name: "initializer",
      type: {
        type: "record",
        fields: [
          {
            name: "locationInModule",
            type: {
              type: "record",
              fields: [
                {
                  name: "filename",
                  type: "string",
                },
                {
                  name: "line",
                  type: "int",
                },
              ],
            },
          },
          {
            name: "parameters",
            type: {
              type: "array",
              items: {
                type: "record",
                name: "parameter",
                fields: [
                  {
                    name: "docs",
                    type: {
                      type: "record",
                      fields: [{ name: "summary", type: "string" }],
                    },
                  },
                  { name: "name", type: "string" },
                  jsiiType,
                ],
              },
            },
          },
        ],
      },
    },

    {
      name: "kind",
      type: "string",
    },
    {
      name: "locationInModule",
      type: {
        type: "record",
        fields: [
          {
            name: "filename",
            type: "string",
          },
          {
            name: "line",
            type: "int",
          },
        ],
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "namespace",
      type: "string",
    },

    {
      name: "properties",
      type: [
        {
          type: "array",
          items: {
            type: "record",
            fields: [
              {
                name: "immutable",
                type: ["boolean", "null"],
              },
              {
                name: "locationInModule",
                type: {
                  type: "record",
                  fields: [
                    {
                      name: "filename",
                      type: "string",
                    },
                    {
                      name: "line",
                      type: "int",
                    },
                  ],
                },
              },
              { name: "name", type: "string" },
              {
                name: "optional",
                type: ["boolean", "null"],
              },
              jsiiType,
            ],
          },
        },
        "null",
      ],
    },

    {
      name: "methods",
      type: [
        {
          name: "locationInModule",
          type: {
            type: "record",
            fields: [
              {
                name: "filename",
                type: "string",
              },
              {
                name: "line",
                type: "int",
              },
            ],
          },
        },
        { name: "name", type: "string" },
        {
          name: "parameters",
          type: [
            "null",
            {
              type: "array",
              items: {
                type: "record",
                name: "parameter",
                fields: [
                  {
                    name: "name",
                    type: "string",
                  },
                  jsiiType,
                ],
              },
            },
          ],
        },
        {
          name: "overrides",
          type: ["null", "string"],
        },
        {
          name: "protected",
          type: ["null", "boolean"],
        },
        {
          name: "returns",
          type: [
            "null",
            {
              jsiiType,
            },
          ],
        },
      ],
    },
  ],
};

const type = avro.Type.forSchema({
  type: "record",
  fields: [
    {
      name: "author",
      type: {
        type: "record",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "roles",
            type: {
              type: "array",
              items: "string",
            },
          },
        ],
      },
    },
    {
      name: "dependencies",
      type: { type: "map", values: "string" },
    },
    {
      name: "submodules",
      type: {
        type: "map",
        values: {
          type: "record",
          fields: [
            {
              name: "locationInModule",
              type: {
                type: "record",
                fields: [
                  {
                    name: "filename",
                    type: "string",
                  },
                  {
                    name: "line",
                    type: "int",
                  },
                ],
              },
            },
            {
              name: "readme",
              type: {
                type: "record",
                fields: [
                  {
                    name: "markdown",
                    type: "string",
                  },
                ],
              },
            },
            {
              name: "symbolId",
              type: "string",
            },
          ],
        },
      },
    },
    {
      name: "types",
      type: {
        type: "map",
        values: types,
      },
    },
  ],
});

const buf = type.toBuffer(json); // Encoded buffer.
const val = type.fromBuffer(buf); // = {kind: 'CAT', name: 'Albert'}

console.log("IsValid: " + type.isValid(json));
console.log("Encoded: " + buf);
console.log("Val: " + val);
