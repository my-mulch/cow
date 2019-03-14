locals {
  ###################################### AWS ########################################
  aws_role_arn = "arn:aws:iam::718734850255:role/service-role/admin"
  aws_handler  = "index.handler"
  aws_runtime  = "python3.6"
  aws_region   = "us-west-1"
  aws_profile  = "play"

  ###################################### Load-Image ##################################
  load_image_path = "/Users/tpurne984/Workspace/play/parmesan/src/main/back/load-image"
  load_image_name = "parmesan-load-image"
}

provider "aws" {
  region  = "${local.aws_region}"
  profile = "${local.aws_profile}"
}

data "archive_file" "archive_load_image" {
  type        = "zip"
  source_dir  = "${local.load_image_path}"
  output_path = "${local.load_image_path}/${local.load_image_name}.zip"
}

resource "aws_lambda_function" "lambda_load_image" {
  filename         = "${data.archive_file.archive_load_image.output_path}"
  function_name    = "${local.load_image_name}"
  role             = "${local.aws_role_arn}"
  handler          = "${local.aws_handler}"
  source_code_hash = "${data.archive_file.archive_load_image.output_base64sha256}"
  runtime          = "${local.aws_runtime}"
}

# resource "aws_lambda_alias" "lambda_load_image" {
#   name             = "stage"
#   description      = "this is my stage"
#   function_name    = "${aws_lambda_function.lambda_load_image.arn}"
#   function_version = "2"
# }

