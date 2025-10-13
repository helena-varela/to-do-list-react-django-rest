from rest_framework.response import Response
from rest_framework.decorators import api_view
from tasks.models import ToDo
from .serializers import ToDoSerializer

# Create your views here.
@api_view(['GET'])
def getTasks(request):
    tasks = ToDo.objects.all()
    serializer = ToDoSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTask(request, task_id):
    task = ToDo.objects.get(id = task_id)
    serializer = ToDoSerializer(task)
    
    return Response(serializer.data)

@api_view(['POST'])
def createTask(request):
    serializer = ToDoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def updateTask(request,task_id):
    task = ToDo.objects.get(id = task_id)

    task.title = request.data.get('title', task.title)
    task.description = request.data.get('description', task.description)
    task.save()
    return Response({'mensagem':'sucesso'})
    
@api_view(['DELETE'])
def deleteTask(request, task_id):
    task = ToDo.objects.get(id=task_id)
    task.delete()

    return Response({'mensagem':'task apagada'})