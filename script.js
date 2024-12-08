//your JS code here. If

function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }

function applyPreferences() {
      const fontSize = getCookie('fontSize');
      const fontColor = getCookie('fontColor');

      if (fontSize) {
        document.body.style.fontSize = `${fontSize}px`;
        document.getElementById('fontSize').value = fontSize;
      }

      if (fontColor) {
        document.body.style.color = fontColor;
        document.getElementById('fontColor').value = fontColor;
      }
    }

let form=document.getElementById('f1');

f1.addEventListener('submit',()=>
	{
		let fontsize=document.getElementById("fontsize").value;
		let fontcolor=document.getElementById("fontcolor").value;

		if (fontsize) {
        setCookie('fontSize', fontsize, 7);
        document.body.style.fontSize = `${fontsize}px`;
      }

		if (fontcolor) {
        setCookie('fontColor', fontcolor, 7);
        document.body.style.color = fontcolor;
      }
	})


document.addEventListener('DOMContentLoaded', applyPreferences);