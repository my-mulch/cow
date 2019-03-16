import json


def lambda_handler(event, context):
    print("Back off, I'm staging a coup2.o")

    return {
        'statusCode': 200,
        'body': 'see -- now im in that body (couplife). it\'s there but like is it? Let\'s see'
    }
