from django.shortcuts import render
from django.http import HttpResponse
from .models import ToDo

# Create your views here.
def welcome(request):
    return HttpResponse("Bem-vindo!")


def tasks(request):
    """Lista todas as tasks"""
    tasks =   ToDo.objects.all()
    context = {'tasks': tasks}
    return render(request, 'tasks.html' ,context)

def task(request, task_id): 
    """Lê apenas uma task"""
    task = ToDo.objects.get(id=task_id)
    context = {'task': task}
    return render(request, 'task.html', context)

def create_task(request):
    """Cria uma task nova"""
    if request.method == 'POST':
        title = request.POST.get("title")
        description = request.POST.get("description")

        ToDo.objects.create(title=title, description=description)
        
    return render(request, 'create_task.html')

def update_task(request, task_id):
    """Atualiza uma task"""
    task = ToDo.objects.get(id=task_id)
    if request.method == 'POST':
        new_title = request.POST.get("new_title")
        new_description = request.POST.get("new_description")
        task.title = new_title
        task.description = new_description

        task.save()

    context = {"task":task}
    return render(request, "update_task.html", context)

def delete_task(request, task_id):
    """Deleta uma task"""
    task = ToDo.objects.get(id=task_id)
    task.delete()

    return render(request, "delete_task.html")