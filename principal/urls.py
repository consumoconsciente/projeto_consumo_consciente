from django.urls import path, re_path
from . import views


app_name="principal"
urlpatterns = [
    path('', views.index, name='index'),
    path('calculadora/',views.calculadora, name="calculadora"),
    path('aprendaeconomizar/',views.aprendaeconomizar, name="aprendaeconomizar"),
    path('resultados/',views.resultados, name="resultados"),
    path('referencias/',views.referencias, name="referencias"),
    path('sobre/',views.sobre, name="sobre"),
    re_path(r'^.*/$', views.pagina_inexistente, name="paginaInexistente")
]