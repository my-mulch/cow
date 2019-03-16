locals {
  aws_role_arn = "arn:aws:iam::718734850255:role/service-role/admin"
  aws_handler = "lambda_function.lambda_handler"
  aws_runtime = "python3.6"
  aws_region = "us-west-1"
  aws_profile = "play"
}

variable "lambda_path" { type = "string" }
variable "lambda_name" { type = "string" }

provider "aws" {
  region  = "${local.aws_region}"
  profile = "${local.aws_profile}"
}

data "archive_file" "archive" {
  type        = "zip"
  source_dir  = "${var.lambda_path}"
  output_path = "${var.lambda_path}/${var.lambda_name}.zip"
}

resource "aws_lambda_function" "lambda" {
  filename         = "${data.archive_file.archive.output_path}"
  function_name    = "${var.lambda_name}"
  role             = "${local.aws_role_arn}"
  handler          = "${local.aws_handler}"
  runtime          = "${local.aws_runtime}"
  source_code_hash = "${data.archive_file.archive.output_base64sha256}"
  publish          = true
  description = "APARRENTLY!!"
}
