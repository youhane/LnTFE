const iniVariabel = document.getElementById("paragraph")

iniVariabel.value

const username = document.getElementById('username')
const hasilInput = document.getElementById('hasilInput')

username.addEventListener('keyup', () => {
    hasilInput.innerText = username.value
})

$(document).ready(function(){
    $("#iniButton").click(function() {
        $("#paragraph").toggleClass('merah')
    });

    $("#iniButton").hover(function() {
        $("#paragraph").html('Ini di hover')
    });

    $("#username").keyup(function() {
        // Ini Variabel
        let apa = $("#username").val()
        $("#hasilInput").html(apa)

        // Ini pake function
        $("#hasilInput").html($("#username").val())
    });

    $("#iniButton2").click(() => {
        $("#paragraph2").animate({
            height: "toggle",
        }, 500, () => {
            $("#paragraph2").css("background-color", "yellow");
            // $("#paragraph2").html('lorem')
        })
    })

    $('.fade').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
})