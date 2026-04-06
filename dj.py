'''Django Tip: How to Insert Data Using POST

If you're learning Django, here’s a quick example of how to insert data into your database using a POST request.

Model

python
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

- View

python'''
def create_post(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')

        Post.objects.create(title=title, content=content)
        return redirect('success_page')

    return render(request, 'create_post.html')

#- HTML Form

#html
<form method="POST">
    {% csrf_token %}
    <input type="text" name="title" placeholder="Title">
    <textarea name="content"></textarea>
    <button type="submit">Submit</button>
</form>

#✅ That’s it! When the form is submitted, Django inserts the data into the database.

#Django #Python #WebDevelopment #ProgrammingTips