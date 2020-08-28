function getPercentage() {

  var fName = $("#myName").val().trim();
  var sName = $("#anotherName").val().trim();

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + fName + "&sname=" + sName,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "24ae550531msh7139170e67558e4p1db539jsne000e34f9969"
    }
  }

  $.ajax(settings).done(function (response) {

    var compatibility = response.percentage;

    $("#resultDescription").text("Your compatibility rating is")
    $("#result").text(compatibility + "%");

    console.log(response);
    console.log(compatibility);

    var newCouple = {
      name1: fName,
      name2: sName,
      compatibility: compatibility
    }

    console.log(newCouple);

    $.post("/api/new", newCouple).then(function (data) {
      console.log(data);
      alert("Adding couple...");
    });


    if (compatibility >= 97) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/ditto`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Ditto!");
          $("#pokemonDescription").text("Congratulations it’s a perfect pair! There is so much in common and so much chemistry that it is almost impossible to not see a loving and stable relationship. With so many shared interests and goals, we are confident that the both of you can remain inseparable for years to come!");
        });
    } else if (compatibility >= 90 && compatibility <= 96) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/charmander`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Charmander!");
          $("#pokemonDescription").text("One of best kind of relationship there is, is a Charmander. It’s hot, it’s cute, it’s dependable, and not only does it start well but you know it will evolve into something incredibly powerful. The fire won’t go out on a match like this - time to lock this one down forever!");
        });
    } else if (compatibility >= 80 && compatibility <= 89) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/pikachu`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Pikachu!");
          $("#pokemonDescription").text("Simply put, your love is electric. The sparks fly in your relationship and they will continue to do so for years to come. This is the relationship people speak of when they describe what they want. Congratulations!");
        });
    } else if (compatibility >= 75 && compatibility <= 79) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/jigglypuff`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Jigglypuff!");
          $("#pokemonDescription").text("You two are just adorable! Songs are sung constantly about this kind of love, and there are elements of magic. While things may not move quickly, your partner’s charm and lovely demeanor will make this relationship very rewarding.");
        });
    } else if (compatibility >= 70 && compatibility <= 74) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/seaking`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Seaking!");
          $("#pokemonDescription").text("Are you a Goldeen? Because this is the one you have been Seaking. There are plenty of fish in the sea, but not many as good as this. Time to cast your rod!");
        });
    } else if (compatibility >= 65 && compatibility <= 69) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/mewtwo`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Mewtwo!");
          $("#pokemonDescription").text("The two of you are on your own wavelength. You can read each other’s thoughts, finish each other’s sentences & anticipate what they will do next. Seems perfect right? The downside – other people think you’re weird and won’t understand you both. Long as you’re ok with that, it’ll be a great and very rewarding relationship!");
        });
    } else if (compatibility >= 60 && compatibility <= 64) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/squirtle`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Squirtle!");
          $("#pokemonDescription").text("This is a relationship a lot of people want to get into. So cute, so reliable - you know what you’re getting into. The downside? No electricity, not much spark. While the evolution of the relationship is predictable, it's unclear whether this match makes a real splash!");
        });
    } else if (compatibility >= 55 && compatibility <= 59) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/oddish`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Oddish!");
          $("#pokemonDescription").text("Seems like you two are a bit oddish for each other! However, given that opposites attract, there is a glimmer of hope that you two can make things work.");
        });
    } else if (compatibility >= 50 && compatibility <= 54) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Bulbasaur!");
          $("#pokemonDescription").text("A really good start to this relationship. Cute, dependable and you’ll feel like you’re wrapped together in vine the cuddles are so good. The problem here is what it will evolve into. Things get stale and meh pretty quickly. Unfortunately, those cute early days might not last long.");
        });
    } else if (compatibility >= 45 && compatibility <= 49) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/kingler`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Kingler!");
          $("#pokemonDescription").text("Watch out, we might have a stage 5 Kingler on our hands!");
        });
    } else if (compatibility >= 40 && compatibility <= 44) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/jynx`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Jynx!");
          $("#pokemonDescription").text("Careful! You don't want to drag this one out for too long otherwise you’ll Jynx yourself!");
        });
    } else if (compatibility >= 35 && compatibility <= 39) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/psyduck`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Psyduck!");
          $("#pokemonDescription").text("Whilst there might be a pot of Golduck at the end of the rainbow, more often than not you’ll be experiencing headaches. What are they doing? Who are they with? Why would they say that? So many questions begets one big one – is it even worth it?");
        });
    } else if (compatibility >= 28 && compatibility <= 34) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/magikarp`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Magikarp!");
          $("#pokemonDescription").text("You cling to this horrid relationship for what it might one day be. It’s flopping around uselessly, wasting your time and your resources and is in no way helping you win. Could it one day evolve into something glorious? Yes probably. But is it really worth wasting more time hoping to find out? The more time you’ve invested, the harder it will be to let it go.");
        });
    } else if (compatibility >= 21 && compatibility <= 27) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/raticate`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Raticate!");
          $("#pokemonDescription").text("Ouch! This may sting a little but the compatibility here is not so great. You should e-Raticate relationship goals with this person ASAP!");
        });
    } else if (compatibility >= 14 && compatibility <= 20) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/gloom`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Gloom!");
          $("#pokemonDescription").text("If you expect this match to brighten up your day, then guess again. You'll get sick of this one rather quickly and they will end up hanging around like a bad smell. We’ve checked the forecast for you two and it isn’t looking good. Dark skies ahead!");
        });
    } else if (compatibility >= 7 && compatibility <= 13) {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/farfetchd`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Farfetch'd!");
          $("#pokemonDescription").text("Well this isn’t good. We crunched the numbers and the odds are long. There’s just not a whole lot in common between you two, so the chances of it working out are a little Farfetch'd!");
        });
    } else {
      var queryURL = `https://pokeapi.co/api/v2/pokemon/gastly`;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          console.log(response.sprites.other.dream_world.front_default);
          var imageURL = response.sprites.other.dream_world.front_default;
          var imageShow = $("<img>").attr("src", imageURL);
          $("#pokemonImage").html(imageShow);
          $("#pokemonChosen").text("The Pokemon that best describes your love compatibility is Gastly!");
          $("#pokemonDescription").text(" Has the result freaked you out a little? If you feel like you’ve seen a ghost it’s because you have! They’re also gassy. You better make sure there is a Pokémon Center nearby, the relationship could be so toxic that you may require healing!");
        });
    }
  });
};



$("#buttonID").on("click", function (event) {
  event.preventDefault();

  getPercentage();

});
