(() => {
    const targetDiv = document.querySelector('.col-md-8.mt30');
    if (targetDiv) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://seachdb.vercel.app/";
      iframe.id = "dynamic-iframe";
      iframe.style.overflowY = "hidden";
      iframe.style.width = "100%";
      iframe.style.border = "none";
      iframe.style.height = "150px";
      targetDiv.appendChild(iframe);
    }
  })();
