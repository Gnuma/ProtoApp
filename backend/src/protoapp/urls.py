from django.conf.urls import url, include
from rest_framwork import routers
from protoapp import views

router = routers.DefaultRouter()
router.register(r'try', views.index)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
]