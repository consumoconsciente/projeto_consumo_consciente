from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    return render(request=request,template_name="principal/index.html", context={"nome":"Início"})

def calculadora(request):
    return render(request=request,template_name="principal/calculadora.html", context={"nome":"Calculadora"})

def aprendaeconomizar(request):
    return render(request=request,template_name="principal/aprendaeconomizar.html", context={"nome":"Aprenda a Economizar"})

def resultados(request):
    return render(request=request,template_name="principal/resultados.html", context={"nome":"Resultados"})

def referencias(request):
    return render(request=request,template_name="principal/referencias.html", context={"nome":"Referências"})

def sobre(request):
    return render(request=request,template_name="principal/sobre.html", context={"nome":"Sobre"})

def pagina_inexistente(request):
    return render(request=request, template_name="principal/404.html", context={"nome":"404"})