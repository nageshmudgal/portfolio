from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'link')  # Customize columns shown in admin list view
    search_fields = ('title', 'description')  # Enable search functionality
