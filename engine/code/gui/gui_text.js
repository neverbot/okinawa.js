
Engine.GUI.GuiText = function(txt, x, y)
{
  Engine.GUI.GuiElement.call(this);

  this.text = txt;
  this.fontSize = 20;
  this.fontColor = '#FFFFFF'; // white
  this.fontBorderColor = '#000000'; // black
  this.textAlign = Engine.GUI.ALIGN.LEFT;

  if ((x == undefined) || (y == undefined))
  {
    this.size.x = 100;
    this.size.y = 30;
  }
  else
  {
    this.size.x = x;
    this.size.y = y;
  }

  // New GuiText version with its own canvas
  this._canvasRendering = true;
  this._innerCanvas = document.createElement('canvas');
  this._innerCanvas.width  = this.size.x;
  this._innerCanvas.height = this.size.y;
  this._innerContext = this._innerCanvas.getContext('2d');
  // Should re-render the canvas?
  this._innerChange  = true;
}

Engine.GUI.GuiText.prototype = Object.create(Engine.GUI.GuiElement.prototype);
Engine.GUI.GuiText.prototype.constructor = Engine.GUI.GuiText;


Engine.GUI.GuiText.prototype.initialize = function()
{
  Engine.GUI.GuiElement.prototype.initialize.call(this);
}

Engine.GUI.GuiText.prototype.activate = function()
{
  Engine.GUI.GuiElement.prototype.activate.call(this);
}

// Mask Item.getSize
// Engine.GUI.GuiText.prototype.getSize = function()
// {
//   var size = Engine.GUI.GuiElement.prototype.getSize.call(this);

//   // Be sure the size is never zero, or we will have an exception
//   // when trying to render the innerCanvas
//   if ((size.x == 0) || (size.y == 0))
//     return new Engine.MATH.Point(100, 30);
//   else
//     return size;
// }

Engine.GUI.GuiText.prototype.setSize = function(x, y)
{
  Engine.GUI.GuiElement.prototype.setSize.call(this, x, y);
  this._innerCanvas.width  = this.size.x;
  this._innerCanvas.height = this.size.y;
  this._innerChange = true;
}

// Mask Item.getPosition
// Engine.GUI.GuiText.prototype.getPosition = function()
// {
//   if (this.getParent() != undefined)
//   {
//     return this.getParent().getPosition();
//   }

//   return new Engine.MATH.Point(0, 0);
// }

Engine.GUI.GuiText.prototype.setText = function(txt)
{
  if (this.text == txt)
    return;

  this.text = txt;
  this._innerChange = true;
}

Engine.GUI.GuiText.prototype._updateInnerRender = function()
{
  var pos = this.getPosition();
  var size = this.getSize();
  var scale = this.getScaling();

  var where = new Engine.MATH.Point(10, 10 + this.fontSize/2);

  if (this.textAlign == Engine.GUI.ALIGN.CENTER)
  {
    where.x = this.size.x / 2;
    where.y = 10 + this.fontSize/2;
  }

  this._innerContext.clearRect(0, 0, this.size.x, this.size.y);
  this._innerContext.strokeStyle = this.fontBorderColor;
  this._innerContext.fillStyle   = this.fontColor;
  this._innerContext.textAlign   = this.textAlign;     
  this._innerContext.font        = 'bold '+this.fontSize+'px BaseFont,"Courier New"';

  this._innerContext.strokeText( this.text, where.x, where.y); 
  this._innerContext.fillText( this.text, where.x, where.y); 

  this._innerChange = false;
}

Engine.GUI.GuiText.prototype.draw = function(ctx)
{
  if (this.getVisible() == true)
  {
    var pos = this.getPosition();
    var size = this.getSize();

    if (this._canvasRendering == false)
    {
      // var scale = this.getScaling();

      ctx.strokeStyle = this.fontBorderColor;
      ctx.fillStyle = this.fontColor;
      ctx.textAlign = this.textAlign;     
      ctx.font = 'bold '+this.fontSize+'px BaseFont,"Courier New"';

      ctx.strokeText( this.text, 
                      pos.x - (size.x / 2) + 10, 
                      pos.y - (size.y / 2) + this.fontSize/2 + 10);

      ctx.fillText( this.text,
                    pos.x - (size.x / 2) + 10, 
                    pos.y - (size.y / 2) + this.fontSize/2 + 10);
    }
    else
    {    
      if (this._innerChange == true)
        this._updateInnerRender();

      ctx.drawImage(this._innerCanvas, pos.x - (size.x / 2), pos.y - (size.y / 2));
    }
  }

  // Call inherited function 
  Engine.GUI.GuiElement.prototype.draw.call(this, ctx);
}

Engine.GUI.GuiText.prototype.step = function(dt)
{
  // Call inherited function 
  Engine.GUI.GuiElement.prototype.step.call(this, dt);
}

Engine.GUI.GuiText.prototype.setFontSize = function(size) { this.fontSize = size; }
Engine.GUI.GuiText.prototype.setFontColor = function(color) { this.fontColor = color; }
Engine.GUI.GuiText.prototype.setFontBorderColor = function(color) { this.fontBorderColor = color; }
Engine.GUI.GuiText.prototype.setAlign = function(align) { this.textAlign = align; }
Engine.GUI.GuiText.prototype.setCanvasRendering = function(value) { this._canvasRendering = value; }

