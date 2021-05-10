from flask import *  
import os
from shutil import move
from logic_res import run
app = Flask(__name__)  
ALLOWED_EXTENSIONS = {'pdf'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS 
@app.route('/')  
def upload():  
    return render_template("index.html")  
 
@app.route('/success', methods = ['POST'])  
def success():  
    if request.method == 'POST':  
        f = request.files['file']  
        if(allowed_file(f.filename)):
            f.save(f.filename)  
            os.rename(f.filename, 'cv.pdf')
            run()
           
            return render_template("layout.html", name = f.filename)  
        else:
            return "file not supported"

if __name__ == '__main__':  
    app.run(debug = True)  

