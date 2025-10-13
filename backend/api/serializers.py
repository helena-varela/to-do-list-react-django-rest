from rest_framework import serializers
from tasks.models import ToDo

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'
        