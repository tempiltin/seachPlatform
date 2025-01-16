# seachPlatform
seachPlatform
<iframe src="http://localhost:5173/" id="dynamic-iframe" style="overflow-y: hidden; width: 100%; border: none; height: 150px;">
</iframe>

  (() => {
      const targetDiv = document.querySelector('.col-md-8.mt30');
      if (targetDiv) {
        const iframe = document.createElement('iframe');
        iframe.src = "https://searchdb-eight.vercel.app/";
        iframe.id = "dynamic-iframe";
        iframe.style.overflowY = "hidden";
        iframe.style.width = "100%";
        iframe.style.border = "none";
        iframe.style.height = "150px";
        targetDiv.appendChild(iframe);
      }
    })();

