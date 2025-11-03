from django.urls import path, include
from django.contrib import admin
from . import views

urlpatterns = [
    path('tasks/', views.getTasks),
    path('tasks/<int:task_id>', views.getTask),
    path('tasks/create', views.createTask),
    path('tasks/update/<int:task_id>', views.updateTask),
    path('tasks/update_title_description/<int:task_id>', views.updateTitleDescription),
    path('tasks/delete/<int:task_id>', views.deleteTask),
]