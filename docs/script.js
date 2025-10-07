<button id="sapabutton">Hi</button>

<style>
  #sapabutton {
    background-color: teal;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 128, 128, 0.4);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  #sapabutton:hover {
    background-color: #004d4d;
    box-shadow: 0 6px 12px rgba(0, 77, 77, 0.6);
  }
</style>

<script>
  const tombolSapa = document.getElementById('sapabutton');
  tombolSapa.addEventListener('click', function() {
    alert('Hi');
  });
</script>
