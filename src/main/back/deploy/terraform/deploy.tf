locals {
  ###################################### AWS ########################################
  aws_role_arn = "arn:aws:iam::718734850255:role/service-role/admin"
  aws_handler  = "lambda_function.lambda_handler"
  aws_runtime  = "python3.6"
  aws_region   = "us-west-1"
  aws_profile  = "play"

  ############################## redbridge-hello-world ############################
  redbridge_hello_world = "/Users/tpurne984/Workspace/play/parmesan/src/main/back/redbridge-hello-world"
  redbridge_hello_world_name = "redbridge-hello-world"
}

provider "aws" {
  region  = "${local.aws_region}"
  profile = "${local.aws_profile}"
}

data "archive_file" "archive_redbridge_hello_world" {
  type        = "zip"
  source_dir  = "${local.redbridge_hello_world}"
  output_path = "${local.redbridge_hello_world}/${local.redbridge_hello_world_name}.zip"
}

resource "aws_lambda_function" "lambda_redbridge_hello_world" {
  filename         = "${data.archive_file.archive_redbridge_hello_world.output_path}"
  function_name    = "${local.redbridge_hello_world_name}"
  role             = "${local.aws_role_arn}"
  handler          = "${local.aws_handler}"
  source_code_hash = "${data.archive_file.archive_redbridge_hello_world.output_base64sha256}"
  runtime          = "${local.aws_runtime}"
  publish          = true
  description = "APARRENTLY!!"
}

resource "aws_lambda_alias" "lambda_redbridge_hello_world_stage" {
  name             = "stage"
  description      = "Staging version tied to $latest of hello-world"
  function_name    = "${aws_lambda_function.lambda_redbridge_hello_world.arn}"
  function_version = "$LATEST"
}

resource "aws_lambda_alias" "lambda_redbridge_hello_world_prod" {
  name             = "prod"
  description      = "Production version tied to specified version of hello-world"
  function_name    = "${aws_lambda_function.lambda_redbridge_hello_world.arn}"
  function_version = "1"
}
