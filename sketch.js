var student1;
var reloadImg;
var reload;

function preload()  {
  reloadImg = loadImage("restart.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  student1 = new Student("Hari", 8, "Male", 3, "Official Blue RASA")
  student2 = new Student("Dhruv", 8, "Male", 3, "Official Blue RASA")
  student3 = new Student("Carter", 8, "Male", 3, "Official Blue Short RASA")
  student4 = new Student("Neil", 5, "Male", 1, "Official Blue RASA")
  student5 = new Student("Ishaan", 5, "Male", 1, "Official Blue RASA")
  reload = createSprite(100, 330)
  reload.addImage(reloadImg)
}

function draw() {
  background("yellow");

  setTimeout = (()=>{
    window.location.reload()
  }, 3000)

  if (frameCount % 100 === 0) {
    i = Math.round(random(1, 5)) 
    drawSprites()
    
   
    
    
    
    switch (i) {
      case 1: createDiv(student1.display())
        setTimeout(addText, 100)
        break
      case 2: createDiv(student2.display())
        setTimeout(addText, 100)
        break
      case 3: createDiv(student3.display())
        setTimeout(addText , 100)
        break
      case 4: createDiv(student4.display())
        setTimeout(addText, 100)
        break
      case 5: createDiv(student5.display())
        setTimeout(addText, 100)
        break
    }
  }

}