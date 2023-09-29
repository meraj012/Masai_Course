
    class Counter {
      constructor() {
        this.count = 0;
        this.interval = null;
        this.isRunning = false;
        this.init();
      }

      init() {
        this.toggleButton = document.getElementById("toggleButton");
        this.incrementButton = document.getElementById("incrementButton");
        this.decrementButton = document.getElementById("decrementButton");

        this.toggleButton.addEventListener("click", this.toggle.bind(this));
        this.incrementButton.addEventListener("click", this.increment.bind(this));
        this.decrementButton.addEventListener("click", this.decrement.bind(this));
      }

      toggle() {
        if (this.isRunning) {
          clearInterval(this.interval);
          this.toggleButton.textContent = "Start";
        } else {
          this.interval = setInterval(() => {
            this.count++;
            this.updateCount();
          }, 1000);
          this.toggleButton.textContent = "Stop";
        }
        this.isRunning = !this.isRunning;
      }

      increment() {
        if (this.isRunning) {
          clearInterval(this.interval);
          this.isRunning = false;
          this.toggleButton.textContent = "Start";
        }
        this.count++;
        this.updateCount();
      }

      decrement() {
        if (this.isRunning) {
          clearInterval(this.interval);
          this.isRunning = false;
          this.toggleButton.textContent = "Start";
        }
        this.count--;
        this.updateCount();
      }

      updateCount() {
        document.getElementById("count").textContent = this.count;
      }
    }

    const counter = new Counter();
