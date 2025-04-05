"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_info = [user.serialize() for user in users]
    return jsonify(user_info), 200

# @api.route('/login', methods=['POST'])
# def get_login():
#     email_from_frontend = User.get("email", "Not registred e-mail")
#     password_from_frontend = User.get("password", "Incorrect password")
#     user = User.query.filter_by(email = email_from_frontend, password = password_from_frontend).first()

# @api.route('/register', methods=['POST'])
# def register_form():
#     email = request.json.get("email", "Es necesario especificar un E-mail")
#     password = request.json.get("password", "Debe ingresar una contraseña")
#     new_user = User(email = email, password = password, is_active = True)
#     return 

@api.route('/signup', methods=['POST'])
def signup():
    response = request.get_json()
    if "email" not in response or "password" not in response or "username" not in response:
        return jsonify({"msg": "Please add username, email and password to be registered"}), 400 
    else:
        email = response["email"]
        password = response["password"]
        username = response["username"]
        exist = User.query.filter_by(email = email, username= username).first()
        if not exist:
            new_user = User(email = email, password = password, is_active= True, username= username)
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"msg": "User added"}),200
        else:
            return jsonify({"msg": "This user already exist, please try another email and username"}), 400

@api.route('/login', methods=['POST'])
def get_login():
    response = request.get_json()
    if "email" not in response or "password" not in response:
        return jsonify({"msg": "Please add email and password to login"})
    email = response["email"]
    password = response["password"]
    exist = User.query.filter_by(email = email, password = password).first()
    if exist:
         access_token = create_access_token(identity=email)
         return jsonify({"token": access_token}), 200

        

 
@api.route('/private', methods=['GET'])
@jwt_required()
def authentication():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200






