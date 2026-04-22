console.log("Enny Aesthetics site loaded");

function loadImages(folder, elementId) {
  const container = document.getElementById(elementId);
  let i = 1;

  function loadNext() {
    const img = new Image();
    img.src = `public/gal/${folder}/${i}.webp`;

    img.onload = function () {
      container.appendChild(img);
      i++;
      loadNext(); // load next image
    };

    img.onerror = function () {
      // stop when image not found
      console.log(`Finished loading ${folder}`);
    };
  }

  loadNext();
}

loadImages("NAILS", "nails");
loadImages("MAKE-UP", "makeup");
loadImages("TATTOOS", "tattoos");

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  const text = `Hello Enny Aesthetics,
  
Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}
Message: ${message}`;

  const whatsappNumber = "2348058103652";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});