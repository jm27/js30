# js30-drumKit

- Key events
- Data-key
- audio.play()
- audio.currentTime = 0
- transition

# js30-CSS + JS Clock

- new Date()
- CSS transform, transition, transform-origin, transition-timing-function
- getSeconds(), getMinutes(), getHours()
- setInterval()

# js30-Update-CSS-Variables

- :root
- CSS Variable, declare: --name, use: var(--name).
- dataset: Object contains all dataset attributes.
- document.documentElement.style.setProperty(`--varname`, updatename).
- Event Listeners: mousemove, change.

# JS30 - Flex Panels Image Gallery

- flex
- .panel > \* (children elements)
- .panel > _:first-child, .panel > _:last-child
- propertyName
- classList.toggle()
- Event Listener: Transitionend, click

# JS30 - Array-Cardio

- Array.prototype.filter()
- Array.prototype.map()
- Array.prototype.sort()
- Array.prototype.reduce()
- .match()
- .split(/\r?\n/) - Regex split on line break

# JS30 - AJAX-Type-Ahead

- fetch()
- (...spreadOperator)
- regex = new RegExp
- .replace()
- .toString()
- 3 digit regex (/\B(?=(\d{3})+(?!\d))/g, ',')
- .join()

# JS30 - Array-Cardio-2

- new Date().getFullYear() = Get current year
- Array.prototype.some()
- Array.prototype.every()
- Array.prototype.findIndex()
- Array.prototype.find()

# JS30 - Dev-Tools-Domination

- console.warn()
- console.error()
- console.info()
- console.assert()
- console.clear()
- console.dir()
- console.group() - console.groupEnd()
- console.count()
- console.time() - console.timeEnd()
- console.table()

# JS30 - Hold-Shift-And-Check-Checkboxes

- input[type="checkbox"]
- e.shiftKey
- Array.prototype.forEach()
- selector('.checkbox').checked = true
- toggleBoolean = !toggleBoolean

# JS30 - Key-Sequence-Detection

- Array.prototype.push()
- Array.prototype.splice(-array2.length - 1, Array.length - array2.length) = array lenght is less equal to match
- cornify.add()

# JS30 - Slide-in-on-Scroll

- Debounce function
- window.scrollY
- window.innerHeight
- element.offsetTop

# JS30 - Custom Video Player

- video[this.name] = this.value
- event.offsetX
- addEventListenet("mousemove", function callback(){})
- progress.addEventListener('mousemove', (e) => mousedown && function(e));

# JS30 - Mouse Move Shadow

- const { offsetWidth: width} = element
- const { offsetY: y} = element
- Math.round()
- element.style.textShadow

# JS30 - Sort Without Articles
- Array.prototype.sort()
- replace(/^(a |the |an )/i, '')
- trim()
- join('')

# JS30 - Local Storage
- JSON.parse() converts to Object
- JSON.stringify() convert to JSON string
- localStorage.getItem('key')
- localStorage.setItem('key', 'item')
- localStorage.removeItem('key')
- addEventListener('submit', function)

# JS30 - Adding Up Times with Reduce
- Array.from(nodeList)
- Math.floor()
- Mod operator %
- parseFloat

# JS30 - WebCam fun
- navigator.mediaDevices.getUserMedia({video: true, audio: false})
- video.srcObject 
- video.play()
- document.createElement()
- video.addEventListener('canplay', function)

# JS30 - Native Speech Recognition
- window.SpeechRecognition
- element.appendChild()
- addEventlistener('result')
- addEventlistener('end')

# JS30 - Geolocation
- navigator.geolocation.watchPosition()

# JS30 - Follow Allong Highlight Link
- Element.getBoundingClientRect
- window.scrollY
- window.scrollX
- Element.style.transform = `translate(100px, 100px)
- addEventListener('mouseenter', function)

# JS30 - Speech Synthesis
- SpeechSynthesisUtterances
- SpeechSynthesis.cancel()
- SpeechSynthesis.speak(msg) 

# JS30 - Sticky Navbar
- element.offsetTop
- window.scrollY
- add class to body to work on different elements body .class .element

# JS30 - Event Capture
-capture
-once
-event.stopPropagation()

# JS30 - Follow Along Dropdown
-element.getBoundingClientRect()
-setTimeout()
-transform: translate(left, top)
-element.addEventListener('mouseenter', function)
-element.addEventListener('mouseleave', function)