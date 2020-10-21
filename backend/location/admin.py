from django.contrib import admin
from .models import MapLocation, CustomerLocation, TaskerLocation, TaskLocation

admin.site.register(TaskerLocation)
admin.site.register(TaskLocation)
admin.site.register(CustomerLocation)
admin.site.register(MapLocation)

# Register your models here.