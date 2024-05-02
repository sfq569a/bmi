function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
  
    var bmi = weight / ((height / 100) * (height / 100));
    var result = "Your BMI is: " + bmi.toFixed(2);
  
    document.getElementById('result').innerHTML = result;
  }
  
  async function accessCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.getElementById('cameraFeed');
      video.srcObject = stream;
      video.play();
      document.getElementById('cameraFeed').style.display = 'block';
    } catch (error) {
      console.error('Error accessing camera: ', error);
    }
  }
  