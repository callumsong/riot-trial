<root-tag>
  <h1>Hi</h1>
  <sparta-list name="sparta_list"></sparta-list>
  <h2>Oh Hai {opts.first_name}</h2>

  <input type="text" name="first_name">
  <button onclick="{update_name}">Update Name</button>

  <script>
    update_name() {
      opts.first_name = this.first_name.value;
    }

    this.on('mount', function() {
      console.log('hi');
    });
  </script>
</root-tag>