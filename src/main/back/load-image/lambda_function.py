import json


def lambda_handler(event, context):
    print("WIll you be in the cloud logs, my friend?")

    return json.dumps({
        'statusCode': 200,
        'body': 'this will eventually be a numpy array'
    })
