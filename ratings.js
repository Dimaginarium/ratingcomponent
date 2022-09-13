document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    let selected = document.querySelector('input[name="rate"]:checked').value;
    console.log(selected);
    document.querySelector(".result").innerHTML = "You selected " + selected + " out of 5!";

    document.querySelector(".ratingbox").classList.add("hidden");
    document.querySelector(".thankyou-box").classList.remove("hidden");
});