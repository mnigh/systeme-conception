// main.js

(function () {
    function handleFormSubmit() {
      document.getElementById("referrer").value = document.referrer;
  
      document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("form");
  
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          var formData = new FormData(form);
          var contactDto = {};
  
          formData.forEach(function (value, key) {
            contactDto[key] = value;
          });
  
          sessionStorage.setItem("contact-dto", JSON.stringify(contactDto));
          location.href = "/contactez-nous/merci.html";
        });
      });
    }
  
    function setBackToReferrer() {
      document.addEventListener("DOMContentLoaded", function () {
        var referrerLink = document.getElementById("backToReferrer");
        var contactDto = JSON.parse(sessionStorage.getItem("contact-dto"));
  
        if (contactDto && contactDto.referrer) {
          referrerLink.href = contactDto.referrer;
        } else {
          referrerLink.href = "javascript:history.back()";
        }
      });
    }
  
    // Run the appropriate function based on the current page
    var currentPage = document.location.pathname;
  
    if (currentPage.endsWith("/contactez-nous/index.html")) {
      handleFormSubmit();
    } else if (currentPage.endsWith("/contactez-nous/merci.html")) {
      setBackToReferrer();
    }
  })();
  