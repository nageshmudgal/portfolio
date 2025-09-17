from django.contrib import admin
from .models import Project,Experience

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'link')  # Customize columns shown in admin list view
    search_fields = ('title', 'description')  # Enable search functionality

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'start_date', 'end_date')
    list_filter = ('company', 'start_date')
    search_fields = ('role', 'company', 'description')