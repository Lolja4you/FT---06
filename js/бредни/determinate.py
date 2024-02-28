import json

try:
    with open('products.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
except json.decoder.JSONDecodeError as e:
    print(f"Ошибка декодирования JSON на строке {e.lineno}, позиция {e.colno}: {e.msg}")