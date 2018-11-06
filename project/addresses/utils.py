import requests


def get_status_code(address):
    return requests.get(address).status_code
