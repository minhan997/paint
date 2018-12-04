var paint = function(){
    this.canvas = null;
    this.context = null;
    this.width = 800;
    this.height = 500;

    this.color ='#ff0000';
    this.lineWidth = 2;

    this.drawing = false;
    this.savedMousePosition = {x:0,y:0};

    var self = this;

    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.appendChild(this.canvas);
        this.drawLine(10,10,100,100);
        this.listenEvent();
    }

    this.listenEvent = function(){
        this.canvas.addEventListener('mousedown', self.processMouseDown);
        this.canvas.addEventListener('mouseup', self.processMouseUp);
        this.canvas.addEventListener('mousemove', self.processMouseMove);
    }

    this.processMouseDown = function(event){
        this.drawing = true;
        this.savedMousePosition = self.getMousePosition(event);

    }

    this.processMouseUp = function(event){
         this.drawing = false;
    }

    this.processMouseMove = function(event){
        var newMousePosition = self.getMousePosition(event);
        self.drawLine(
            self.savedMousePosition.x,
            self.savedMousePosition.y,
            newMousePosition.x,
            newMousePosition.y
        );
    }

    this.getMousePosition = function(event){
        var rect = this.canvas.getBoundingClinetRect();
        return {
            x : event.clientX = rect.left,
            y : event.clientY = rect.top
        }
    }

    this.drawLine = function(startX, startY, endX, endY){
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.color;
        this.context.stroke();
    }
}

var p = new paint();
p.init();
