from django.urls import path
from tasks import views

urlpatterns = [
    path('tasks', views.tasks),
    path('task/<int:task_id>', views.task),
    path('create_task', views.create_task),
    path('update_task/<int:task_id>', views.update_task),
    path('delete_task/<int:task_id>', views.delete_task),
]