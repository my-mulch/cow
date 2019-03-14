locals {
  ###################################### AWS ########################################
  aws_role_arn = "arn:aws:iam::718734850255:role/service-role/admin"
  aws_handler  = "index.handler"
  aws_runtime  = "python3.6"

  ###################################### Load-Image ##################################
  load_image_path = "/Users/tpurne984/Workspace/play/parmesan/src/main/back/load-image"
  load_image_name = "load-image-test"
}

provider "aws" {
  access_key = "AKIAIFE6HTLEWJ52RYKQ"
  secret_key = "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"
  region     = "us-west-1"
}

data "archive_file" "archive_load_image" {
  type        = "zip"
  source_dir  = "${local.load_image_path}"
  output_path = "${local.load_image_path}/${local.load_image_name}.zip"
}

resource "aws_lambda_function" "lambda_load_image" {
  filename         = "${local.load_image_path}/${local.load_image_name}.zip"
  function_name    = "${local.load_image_name}"
  role             = "${local.aws_role_arn}"
  handler          = "${local.aws_handler}"
  source_code_hash = "${data.archive_file.archive_load_image.output_base64sha256}"
  runtime          = "${local.aws_runtime}"
}
