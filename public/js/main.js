// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    /*	REMOVE FOR PRODUCTION, DEV ONLY
    */

  });

  $(window).on('HTMLImportsLoaded', function(e) {
    var footer_template, localUrl, quickTools_template, templates;

    console.log("templates loaded!!!!!");
    templates = window.HTMLImports.importer.documents;
    localUrl = "http://localhost:3000/templates/";
    quickTools_template = templates[localUrl + 'quicktool_and_logo.html'].body.querySelectorAll("div.container");
    footer_template = templates[localUrl + 'footer.html'].body.querySelectorAll("div.container");
    $(".quicktool_and_logo_template").html(quickTools_template);
    return $(".footer_template").html(footer_template);
  });

  $(".clickable").click(function(event) {
    event.preventDefault();
    if ($(this).data().href) {
      return window.open($(this).data().href, "_self");
    }
  });

  $Trumba.addSpud({
    webName: "msudenver-events-calendars",
    spudType: "upcoming",
    teaserBase: "http://www.trumba.com/calendars/msudenver-events-calendars",
    spudId: "homepage_events"
  });

  $(window).resize(function() {
    return console.log("resize::" + $(window).width());
  });

  $('div#top3').load("/newsroom/top3/");

}).call(this);
