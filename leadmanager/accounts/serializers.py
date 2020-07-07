from rest_framework import serializers

# Django already has User + Auth model ready to use
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

'''
Serializers allow complex data such as querysets and model instances to be converted
to native Python datatypes that can then be easily rendered into JSON, XML 
or other content types. Serializers also provide deserialization, 
allowing parsed data to be converted back into complex types, 
after first validating the incoming data.
'''


# User Serialzier
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user


# Login Serializer
