<root-tag>
  <h1>Hi</h1>
  <sparta-list name="sparta_list" first_name="{opts.first_name}"></sparta-list>
  <ul>
    <li>This</li>
    <li>Is</li>
    <li>SPARTA!</li>
  </ul>
  <button onclick="{set_names}">Set Names</button>
  <foo if="{ tags.foo.skill_number }">
    <yield to="content">
      <p>Haaaaai</p>
      <p>{skill_name}</p>
      <p>{skill_number}</p>
    </yield>
  </foo>
  <script>
    this.on('mount', function() {
      console.log('hi');
    });

    set_names() {
      this.tags.foo.skill_name = "Bob";
      this.tags.foo.skill_number = 6;
      this.update();
    }
  </script>
</root-tag>