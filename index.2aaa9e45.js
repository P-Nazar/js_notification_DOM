var e=function(e,t,n,a,o){var i=document.createElement("div");i.className="notification ".concat(o),i.style.top="".concat(e,"px"),i.style.right="".concat(t,"px");var c=document.createElement("h2");c.className="title",c.textContent="".concat(n);var s=document.createElement("p");s.textContent="".concat(a),i.appendChild(c),i.appendChild(s),document.querySelector("body").appendChild(i),setTimeout(function(){i.style.display="none"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.2aaa9e45.js.map
