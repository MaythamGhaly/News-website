let dataPage = '';
$.ajax({url: "http://localhost/news/News-website/php/news.php", success: function(result){
    const data = JSON.parse(result);
    data.forEach(element => {
      dataPage += `
      <div class="row">
        <div class="col-12">
            <h1 class="mt-5">Sports News</h1>
            <p class="mt-3">
            ${element.sports}
            </p>
        </div>
    </div>
    <div class="row">
    <div class="col-12">
        <h1 class="mt-5">International News</h1>
        <p class="mt-3">
        ${element.international}
        </p>
    </div>
</div>
<div class="row">
        <div class="col-12">
            <h1 class="mt-5">Lebanon News</h1>
            <p class="mt-3">
            ${element.lebanon}
            </p>
        </div>
    </div>
      `;
      
    });
    document.getElementById("row").innerHTML = dataPage;
  }});
