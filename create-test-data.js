const path = require("path");
const fs = require("fs");

const AWS_TYPES_LENGTH = 11832;
const AWS_SUBMODULES_LENGTH = 1233;

const OUTPUT = path.resolve(__dirname, "fake.json");
const submoduleValue = {
  locationInModule: {
    filename: "providers/aws/index.ts",
    line: 2,
  },
  readme: {
    markdown:
      "# `aws_accessanalyzer_analyzer`\n\nRefer to the Terraform Registory for docs: [`aws_accessanalyzer_analyzer`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer).\n",
  },
  symbolId: "accessanalyzer-analyzer/index:",
};

const typeValue = {
  assembly: "aws",
};

const result = {
  types: new Array(AWS_TYPES_LENGTH).fill(typeValue).reduce(
    (acc, val, i) => ({
      ...acc,
      [`aws.worklinkFleet.WorklinkFleet${i}`]: val,
    }),
    {}
  ),
};

fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2));
