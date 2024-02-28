import requests
import json

# Отправляем GET-запрос к API и получаем данные
response = requests.get('https://ioriginal.store/data/products.json.gz')

# Проверяем успешность запроса
if response.status_code == 200:
    # Разархивируем данные
    data = response.json()

    # Создаем пустой список для хранения продуктов
    products = []

    # Проходимся по каждому продукту
    for product in data:
        # Получаем ID товара
        product_id = product['id']
        print('ID товара:', product_id)

        # Формируем ссылку для получения описания продукции
        description_url = f"https://ioriginal.store/api/v2/shop/product/{product_id}"
        # print('Ссылка на описание продукции:', description_url)

        # Отправляем GET-запрос для получения описания продукции
        description_response = requests.get(description_url)

        # Проверяем успешность запроса описания продукции
        if description_response.status_code == 200:
            # Получаем данные описания продукции
            description_data = description_response.json()

            # Добавляем ключ "основные данные продукта" с описанием в объект продукта
            product['description_data'] = description_data

            # Добавляем продукт в список
            products.append(product)
        else:
            print('Ошибка при получении описания продукции. Код ошибки:', description_response.status_code)
else:
    print('Ошибка при получении данных. Код ошибки:', response.status_code)

with open('products.json', 'w', encoding='utf-8') as file:
    # Записываем список продуктов в файл
    json.dump(products, file, ensure_ascii=False)