from flask import Flask, render_templates
app=Flask(__name__)
@app.route("/")
def hello_world():
    return render_templates("index.html", title="Hello")