<template>
  <div>
    <audio ref="audio" preload="auto">
      <source src="/media/blip.mp3" type="audio/mpeg" />
    </audio>
    <h3>Barcode Search Utility</h3>
    <p>
      A simple web-based tool for searching barcodes. It's good for sorting
      larger deliveries according to invoice/destination. Simply import a list
      of codes (serial numbers, asset tags, etc.) and then receive an audio
      alert when a scanned item matches or does not match your list.
    </p>
    <h5>Step 1: Load barcode list</h5>
    <div class="tab">
      <p>One barcode per line. Supported file formats are .txt and .csv</p>
      <p class="tab"><input type="file" @change="uploadFile($event)" /></p>
    </div>
    <h5>Step 2: Set options (Optional)</h5>
    <p class="tab">
      Automatically check the barcode after the specified number of characters.
      (For use with scanners that do not automatically send the [Enter] command
      at the end of each scan.)
    </p>
    <div class="tab">
      <input type="checkbox" class="tab" v-model="checked" />
      <label>Auto [Enter] after</label>
      <input size="1" v-model="digits" />
      <label>characters.</label>
    </div>
    <br />
    <div class="tab">
      <label class="tab">Play sound when the scanned item</label>
      <select v-model="condition">
        <option>Matches</option>
        <option>Does Not Match</option>
      </select>
      <label>the list.</label>
    </div>
    <h5>Step 3: Enter / Scan code(s) to compare</h5>
    <div>
      <input v-model="input" @keyup="keyCount" />
      <button @click="scanMatch">Go</button>
    </div>
  </div>
</template>

<script>
var lineArray = [];

export default {
  data() {
    return {
      checked: false,
      condition: 'Matches',
      digits: null,
      input: null
    };
  },
  methods: {
    uploadFile: function(event) {
      var input = event.target.files[0];
      var reader = new FileReader();
      reader.readAsText(input);
      reader.onload = () => {
        var textFile = reader.result;
        this.csvToArray(textFile);
      };
    },
    csvToArray: function(inputFile) {
      var lines = inputFile.split(/\r\n|\n/);
      for (var i = 0; i < lines.length; i++) {
        lineArray[i] = lines[i];
      }
    },
    scanMatch: function() {
      if (this.condition == 'Matches') {
        if (lineArray.includes(this.input)) {
          this.$refs.audio.play();
        }
      } else {
        if (!lineArray.includes(this.input)) {
          this.$refs.audio.play();
        }
      }
      this.input = null;
    },
    keyCount: function(event) {
      if (event.key == 'Enter') {
        this.scanMatch();
      }
      if (this.checked == true) {
        if (this.input.length >= this.digits) {
          this.scanMatch();
        }
      }
    }
  }
};
</script>
