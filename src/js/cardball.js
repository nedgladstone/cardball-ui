async function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 200, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    console.log('About to show image');

    baseImage = new Image();
    baseImage.src = 'images/CoorsField.jpg';
    baseImage.onload = function() {
        ctx.drawImage(baseImage, 0, 0, 1365, 1024);
    }

    console.log('Sleeping');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Done sleeping');
  }
