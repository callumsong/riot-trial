<sparta-list>
  <h2>Oh Hai {first_name}</h2>

  <input type="text" name="new_name">
  <button onclick="{update_name}">Update Name</button>
  <script>
    this.on('mount', function() {
      this.first_name = opts.first_name;
      this.update();
    }.bind(this));

    update_name() {
      this.first_name = this.new_name.value;
    }.bind(this)
  </script>
</sparta-list>