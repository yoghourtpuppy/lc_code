(() => {
  // example product id
  const productId = "ID_12345";
  const ratingResult = document.querySelector(".ratingResult");
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = star.dataset.rating;

      // print rating
      ratingResult.innerText = `${rating} star rating`;

      // clear stars
      stars.forEach((s) => {
        if (s.classList.contains("selected")) {
          s.classList.remove("selected");
        }
      });

      // add selected class to stars until rating
      stars.forEach((s) => {
        if (s.dataset.rating <= rating) {
          s.classList.add("selected");
        }
      });

      // send post request or do something with rating
      console.log({ productId, rating });
    });
  });
})();

(()=> {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star) => {
    star.addEventListener('click', ()=>{
      const rating = star.dataset.rating;
      stars.forEach((star) => {
        if(star.classList.contains('selected')) {
          star.classList.remove('selected');
        }
      });
      stars.forEach((star)=>{
        if(star.dataset.rating <= rating) {
          star.classList.add('selected');
        }
      });
    });
  });
});