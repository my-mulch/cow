FROM lambci/lambda:build-python3.6

RUN pip install numpy

RUN curl https://releases.hashicorp.com/terraform/0.11.13/terraform_0.11.13_linux_amd64.zip > terraform.zip \
    && unzip terraform.zip \
    && mv terraform /usr/local/bin

RUN curl https://releases.hashicorp.com/terraform-provider-aws/2.2.0/terraform-provider-aws_2.2.0_linux_amd64.zip > aws_plugin.zip \
    && unzip aws_plugin.zip \
    && mv terraform-provider-aws_v2.2.0_x4 ~

RUN curl https://releases.hashicorp.com/terraform-provider-archive/1.1.0/terraform-provider-archive_1.1.0_linux_amd64.zip > archive_plugin.zip \
    && unzip archive_plugin.zip \
    && mv terraform-provider-archive_v1.1.0_x4 ~

RUN cd ~ && mkdir -p .terraform/plugins/linux_amd64 && mv *_x4 .terraform/plugins/linux_amd64/
