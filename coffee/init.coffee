
# Copyright Pablo Varela 2016
# Coffeescript

# array of buttons info
buttons = [
  {
    name: "twitter"
    class: "icon ion-social-twitter"
    link: "https://twitter.com/pablopunk"
  },
  {
    name: "github"
    class: "icon ion-social-github"
    link: "https://github.com/pablopunk"
  },
  {
    name: "youtube"
    class: "icon ion-social-youtube"
    link: "https://youtube.com/varelapol13"
  },
  {
    name: "chronocube"
    class: "icon ion-cube"
    link: "https://pablopunk.github.io/chronocube"
  }
]

# document ready
$ ->
  # create each button
  for b in buttons
    button_html = "<div class='three columns'><a class='button' href='#{b.link}'><i class='#{b.class}'></i> #{b.name}</a></div>"
    $('.container').append button_html
  
  # animations
  $('.button').css { opacity : 0 }
  $('.button').css { 'margin-left' : -3000 }
  delay = 400
  $($('.button').get().reverse()).each ->
    $(this)
      .animate { 'margin-left' : 0, opacity : 1 }, delay, "easeOutCirc"
    delay += 300


    