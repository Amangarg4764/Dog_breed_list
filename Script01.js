var breedImage = $("#Display_img");
var dropdown = $(".Dropdown_menu");

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

$("#Search").click(function (e) {
    e.preventDefault();

    let breed = dropdown.val();
    
    let url = "https://dog.ceo/api/breed/" + breed;
    url += "/images";

    $("#Display_img img").remove();
    
    $.get(url, function (data) {
        let imagesUrl = data.message;

        for (let i=0;i<10;i++) {
            if(imagesUrl[i]==null) {
                break;
            }
            breedImage.append('<img class="size" src="' + imagesUrl[i] + '" alt="' + breed + '">');
        }
    });
});
function Fun1(){
    
    let breed = "akita";
    dropdown.val("akita");
    let url = "https://dog.ceo/api/breed/" + breed;
    url += "/images";

    $("#Display_img img").remove();
    
    $.get(url, function (data) {
        let imagesUrl = data.message;

        for (let i=0;i<10;i++) {
            if(imagesUrl[i]==null) {
                break;
            }
            breedImage.append('<img class="size" src="' + imagesUrl[i] + '" alt="' + breed + '">');
        }
    });
}
