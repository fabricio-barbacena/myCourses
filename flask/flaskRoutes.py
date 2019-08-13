from flask import Flask, jsonify, request

app = Flask(__name__)

users = ['Sheldon', 'Leonard', 'Penny', 'Howard', 'Raj', 'Amy', 'Bernadette']

#"Hello World"
@app.route('/hello')
def hello_world():
    return "Hello, World!"

#send a json
@app.route('/json')
def return_json():
    return jsonify({'message': 'Hello, World!'})

#Users list
@app.route('/users')
def list_all_users():
    return jsonify(users)

#List user by index
@app.route('/users/<user_id>')
def show_user(user_id):
    index = int(user_id)
    if index > len(users)-1 or abs(index) > len(users):
        message = f'There is no user assigned to index {index}.'
        return jsonify(message)
    else:
        return jsonify(users[index])

#Find user by name
@app.route('/users/name/<username>')
def find_user_by_name(username):
    for index in range(len(users)):
        if username == users[index]:
            message = f'User {username} has index {index}'
            print(message)
            return jsonify(message)
    message = f'User {username} is not in the database'
    print(message)
    return jsonify(message)


#Sort users (alphabetical order)
@app.route('/users-sorted')
def sort_users():
    return jsonify(sorted(users))

#Reverse users (alphabetical order)
@app.route('/users-reversed')
def reverse_users():
    return jsonify(sorted(users)[::-1])

#Append user
@app.route('/users', methods=['POST'])
def append_user():
    data = dict(request.json)
    users.append(data['name'])
    print(users)
    return jsonify(users)

#Insert user using index
@app.route('/users/<user_index>', methods=['POST'])
def insert_user(user_index):
    data = dict(request.json)
    index = int(user_index)
    users.insert(index, data['name'])
    print(users)
    return jsonify(users)

#Change user by index
@app.route('/users/<user_id>', methods=['PUT'])
def change_user(user_id):
    index = int(user_id)
    if index > len(users)-1 or abs(index) > len(users):
        message = f'There is no user assigned to index {index}.'
        return jsonify(message)
    else:
        data = dict(request.json)
        users[index] = data['name']
        message = f'User of index {index} changed to {data["name"]}'
        return jsonify(message)

#Change user by name
@app.route('/users/name/<username>', methods=['PUT'])
def change_username(username):
    data = dict(request.json)
    for index in range(len(users)):
        if username.title() == users[index]:
            users[index] = data['name']
            message = (f'User {username.title()} was changed to '
                       f'{data["name"].title()}')
            print(message)
            return jsonify(message)
    message = f'User {username} is not in the database'
    print(message)
    return jsonify(message)

            
#Delete user by index
@app.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    index = int(user_id)
    if index > len(users)-1 or abs(index) > len(users):
        message = f'There is no user assigned to index {index}.' 
        print(message)
        return jsonify(message)
    else:
        removed = users.pop(index)
        message = f'User removed: {removed}, index: {index}.'
        print(message)
        return jsonify(message)


#Delete user by name
@app.route('/users/delete/<username>', methods=['DELETE'])
def delete_username(username):
    for index in range(len(users)):
        if username.title() == users[index]:
            del users[index]
            message = f'User {username.title()} was deleted'
            print(message)
            return jsonify(message)
    message = f'User {username.title()} is not in the database'
    print(message)
    return jsonify(message)


if __name__ == '__main__':
    app.run(debug=True)
